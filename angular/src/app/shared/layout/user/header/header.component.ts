import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, map, tap } from "rxjs";
import { Category } from "src/app/models/response";
import { ThemeService } from "src/app/theme.service";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";

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
    private _filterService: FilterService
  ) {
    this.selectedCategory$ = this._categoryService.selectedCateogry$;
    this.selectedCategory$.subscribe((val) => console.log(val));
  }
  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + "-" + item
    );
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
