import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { CATEGORY_API, PRODUCT_API } from "src/app/models/constance";
import { Pagination } from "src/app/models/model";
import { Category, ODataResponse, Product } from "src/app/models/response";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  defaultCategory: Category = {
    ID: "all",
    name: "Tất cả",
  };
  private selectedCateogryBSub: BehaviorSubject<Category> =
    new BehaviorSubject<Category>(this.defaultCategory);
  selectedCateogry$ = this.selectedCateogryBSub.asObservable();
  nextSelectedCategory(category: Category) {
    this.selectedCateogryBSub.next(category);
  }
  get selectedCategoryVal() {
    return this.selectedCateogryBSub.value;
  }
  httpOptions = {
    headers: new HttpHeaders({
      responseType: "json",
    }),
    params: new HttpParams(),
  };
  constructor(private _httpClient: HttpClient) {}
  findAll(pagination?: Pagination): Observable<ODataResponse<Category[]>> {
    if (pagination) {
      let params: HttpParams = new HttpParams({
        fromObject: {
          $top: pagination.top,
        },
      });
      this.httpOptions.params = params;
    }
    return this._httpClient
      .get<ODataResponse<Category[]>>(CATEGORY_API, this.httpOptions)
      .pipe(
        map((res) => {
          let val = res.value;
          val.unshift(this.defaultCategory);
          return res;
        })
      );
  }
}
