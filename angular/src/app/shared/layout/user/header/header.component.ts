import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, map, tap } from "rxjs";
import { Category } from "src/app/models/response";
import { ThemeService } from "src/app/theme.service";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";
import { ProductService } from "src/app/user/services/product.service";

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
  constructor(
    private _categoryService: CategoryService,
    private _filterService: FilterService,
    private _productService: ProductService
  ) {
    this.selectedCategory$ = this._categoryService.selectedCateogry$;
    this.selectedCategory$.subscribe((val) => console.log(val));
  }
  search(event: any) {
    let filter = this._filterService.filterVal
    filter.search = event.query
    this._productService.findAll(filter).subscribe(res => {
      this.suggestions = res.value.map(val => val.name)
      this._productService.nextProducts(res.value)
    })
  }
  ngOnInit(): void {
    this.categories$ = this._categoryService
      .findAll()
      .pipe(map((res) => res.value));
  }
  selectCategory(cateogry: Category) {
    if (this._categoryService.selectedCategoryVal != cateogry) {
      this._categoryService.nextSelectedCategory(cateogry);
      let filterVal = this._filterService.filterVal;
      filterVal.categoryId = cateogry.ID === "all" ? undefined : cateogry.ID;
      this._filterService.nextFilter(filterVal);
    }
  }
}
