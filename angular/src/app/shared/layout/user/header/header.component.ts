import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, map, switchMap, tap } from "rxjs";
import { Category, Product } from "src/app/models/response";
import { ThemeService } from "src/app/theme.service";
import {
  CartService,
  PendingProduct,
} from "src/app/user/services/cart.service";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";
import { ProductService } from "src/app/user/services/product.service";
export interface CartItem {
  product: Product;
  quantity: number;
}
@Component({
  selector: "user-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  formGroup!: FormGroup;
  selectedItem: any;
  suggestions!: any[];
  isShowClear = true;
  categories$!: Observable<Category[]>;
  selectedCategory$!: Observable<Category | null>;
  cartItems: CartItem[] = [];
  constructor(
    private _categoryService: CategoryService,
    private _filterService: FilterService,
    private _productService: ProductService,
    public cartService: CartService
  ) {
    this.selectedCategory$ = this._categoryService.selectedCateogry$;
    this.selectedCategory$.subscribe((val) => console.log(val));
  }
  search(event: any) {
    let filter = this._filterService.filterVal;
    filter.search = event.query;
  }
  ngOnInit(): void {
    this.categories$ = this._categoryService
      .findAll()
      .pipe(map((res) => res.value));
    this._productService
      .findAll(this._filterService.defaultFilter)
      .subscribe((v) => {
        v.value.forEach((v) => {
          this.cartItems.push({ product: v, quantity: 1 });
        });
      });
  }
  selectCategory(cateogry: Category) {
    if (this._categoryService.selectedCategoryVal != cateogry) {
      this._categoryService.nextSelectedCategory(cateogry);
      let filterVal = this._filterService.filterVal;
      filterVal.categoryId = cateogry.ID === "all" ? undefined : cateogry.ID;
      this._filterService.nextFilter(filterVal);
    }
  }
  @ViewChild("overlayPanel")
  overlayPanel: any;
  toggleCart(event: any) {
    this.cartItems = [];
    let pendingProducts: PendingProduct[] = this.cartService.pendingProductsVal;
    this._productService
      .findAllByIds(pendingProducts.map((p) => p.productID))
      .pipe(map((res) => res.value));
    this.cartService.pendingProducts$
      .pipe(
        switchMap((pProducts) => {
          pendingProducts = pProducts;
          return this._productService
            .findAllByIds(pendingProducts.map((p) => p.productID))
            .pipe(map((res) => res.value));
        })
      )
      .subscribe((val) => {
        let cartItems: CartItem[] = [];
        val.forEach((product) => {
          let foundCookieProduct: PendingProduct | undefined =
            pendingProducts.find(
              (cProduct) => cProduct.productID === product.ID
            );
          if (foundCookieProduct) {
            cartItems.push({
              product: product,
              quantity: foundCookieProduct.quantity,
            });
          }
        });
        this.cartItems = cartItems;
      });

    this.overlayPanel.toggle(event);
  }
}
