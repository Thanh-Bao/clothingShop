import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  of,
  switchMap,
  tap,
} from "rxjs";
import { CartItem } from "src/app/shared/layout/user/header/header.component";
import { ProductService } from "./product.service";
import { Color, ColorItem, Product, SizeItem } from "src/app/models/response";
export interface PendingProduct {
  productID: string;
  sizeID: string;
  colorID: string;
  quantity: number;
}
@Injectable({
  providedIn: "root",
})
export class CartService {
  pendingProductKey: string = "pendingProducts";

  pendingProductsBSub!: BehaviorSubject<PendingProduct[] | []>;
  pendingProducts$!: Observable<PendingProduct[] | []>;

  cartProducts$: Observable<CartItem[] | []>;

  addedCartProductBSub!: BehaviorSubject<CartItem[] | null>;
  addedCartProduct$!: Observable<CartItem[] | null>;
  constructor(
    private _cookieService: CookieService,
    private _productService: ProductService
  ) {
    this.pendingProductsBSub = new BehaviorSubject<PendingProduct[] | []>([]);
    this.pendingProducts$ = this.pendingProductsBSub.asObservable();
    this.addedCartProductBSub = new BehaviorSubject<CartItem[] | null>(null);
    this.addedCartProduct$ = this.addedCartProductBSub.asObservable();

    this.cartProducts$ = this.pendingProducts$.pipe(
      switchMap((pendingProducts: PendingProduct[]) => {
        if (pendingProducts.length) {
          this.addPendingProductsToCookie(pendingProducts);
          return this._productService
            .findAllByIds(pendingProducts.map((p) => p.productID))
            .pipe(
              map((products) => products.value),
              concatMap((products) => {
                let pendingProducts: PendingProduct[] = this.pendingProductsVal;
                let cartItems: CartItem[] = [];
                pendingProducts.forEach((pendingProduct) => {
                  let foundProduct: Product | undefined = products.find(
                    (product) => product.ID === pendingProduct.productID
                  );
                  if (foundProduct) {
                    let foundColorItem: ColorItem | undefined =
                      foundProduct.Colors.find(
                        (ColorItem) => ColorItem.ID === pendingProduct.colorID
                      );
                    let foundSize: SizeItem | undefined =
                      foundProduct.Sizes.find(
                        (SizeItem) => SizeItem.ID === pendingProduct.sizeID
                      );
                    cartItems.push({
                      product: foundProduct,
                      color: foundColorItem!.Color!,
                      size: foundSize!.Size!,
                      quantity: pendingProduct.quantity,
                    });
                  }
                });
                return of(cartItems);
              })
            );
        } else {
          this._cookieService.remove(this.pendingProductKey);
          return of([]);
        }
      })
    );
  }

  addToCart(pendingProduct: PendingProduct) {
    let pendingProducts: PendingProduct[] = this.pendingProductsVal;
    const { productID, colorID, sizeID, quantity } = pendingProduct;
    let foundPendingProduct = pendingProducts.find(
      (p) =>
        p.productID === productID &&
        p.sizeID === sizeID &&
        p.colorID === colorID
    );

    if (foundPendingProduct) {
      foundPendingProduct.quantity = foundPendingProduct.quantity + quantity;
    } else {
      pendingProducts.push({ productID, quantity, sizeID, colorID });
    }

    this._cookieService.put(
      this.pendingProductKey,
      JSON.stringify(pendingProducts)
    );

    this._productService
      .findAllByIds([pendingProduct.productID])
      .pipe(
        map((res) => res.value),
        tap((val) => {
          let foundColorItem: ColorItem | undefined = val[0].Colors.find(
            (ColorItem) => ColorItem.ID === pendingProduct.colorID
          );
          let foundSize: SizeItem | undefined = val[0].Sizes.find(
            (SizeItem) => SizeItem.ID === pendingProduct.sizeID
          );
          let cartItem: CartItem = {
            product: val[0],
            color: foundColorItem!.Color,
            size: foundSize!.Size,
            quantity: pendingProduct.quantity,
          };
          this.addedCartProductBSub.next([cartItem]);
        })
      )
      .subscribe();

    this.pendingProductsBSub.next(pendingProducts);
  }
  updateQuantity(pendingProduct: PendingProduct) {
    let pendingProducts: PendingProduct[] = this.pendingProductsVal;
    const { productID, colorID, sizeID, quantity } = pendingProduct;
    let foundPendingProduct = pendingProducts.find(
      (p) => productID && p.sizeID === sizeID && p.colorID === colorID
    );

    if (foundPendingProduct) {
      foundPendingProduct.quantity = quantity;
    } else {
      pendingProducts.push(pendingProduct);
    }

    this._cookieService.put(
      this.pendingProductKey,
      JSON.stringify(pendingProducts)
    );

    this.pendingProductsBSub.next(pendingProducts);
  }
  addPendingProductsToCookie(pendingProducts: PendingProduct[]) {
    this._cookieService.put(
      this.pendingProductKey,
      JSON.stringify(pendingProducts)
    );
  }
  get pendingProductsFromCookie(): PendingProduct[] {
    let pendingProducts: PendingProduct[];
    if (this._cookieService.hasKey(this.pendingProductKey)) {
      let pendingProductsJsonString: string = this._cookieService.get(
        this.pendingProductKey
      )!;
      pendingProducts = JSON.parse(pendingProductsJsonString);
    } else {
      pendingProducts = [];
    }
    return pendingProducts;
  }
  get pendingProductsVal(): PendingProduct[] {
    return this.pendingProductsBSub.value;
  }
}
