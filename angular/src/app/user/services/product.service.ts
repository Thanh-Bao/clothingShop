import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Filter, Pagination } from "src/app/models/model";
import { API_DOMAIN, PRODUCT_API } from "src/app/models/constance";
import { HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, map } from "rxjs";
import { ODataResponse, Product } from "src/app/models/response";
import { FormatStringUtilsService } from "./format-string-utils.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private productsBSub!: BehaviorSubject<Product[] | null>;
  products$!: Observable<Product[] | null>;
  httpOptions = {
    headers: new HttpHeaders({
      responseType: "json",
    }),
    params: new HttpParams(),
  };
  constructor(
    private _httpClient: HttpClient,
    private _formatStringUtilsService: FormatStringUtilsService
  ) {
    this.productsBSub = new BehaviorSubject<Product[] | null>(null);
    this.products$ = this.productsBSub.asObservable();
  }
  nextProducts(products: Product[] | null) {
    this.productsBSub.next(products);
  }
  get productsVal() {
    return this.productsBSub.value;
  }
  findAll(filter: Filter): Observable<ODataResponse<Product[]>> {
    const { search, categoryId, pagination, priceRanges } = filter;
    let params: HttpParams = new HttpParams({
      fromObject: {
        $top: pagination.top,
      },
    });
    // if(pagination && pagination.orderBy){
    //   let queryString = filter.pagination.orderBy!
    //   params = params.append("$orderby", queryString);
    // }

    let filterQueryString = "";
    if (categoryId) {
      filterQueryString = filterQueryString.concat(
        ` and category eq '${categoryId}'`
      );
    }
    if (search) {
      let format = this._formatStringUtilsService.removeVietnameseTones(search)
      filterQueryString = filterQueryString.concat(
        ` and contains(ID,'${format}')`
      );
    }
    if (priceRanges) {
      filterQueryString = filterQueryString.concat(
        ` and price gt ${priceRanges[0]} and price lt ${priceRanges[1]}`
      );
    }
    if (filterQueryString) {
      filterQueryString = filterQueryString.slice(5);
      params = params.append("$filter", filterQueryString);
    }

    this.httpOptions.params = params;
    console.log(params);

    return this._httpClient.get<ODataResponse<Product[]>>(
      PRODUCT_API,
      this.httpOptions
    );
  }
  fetchMinAndMaxPriceProduct(
    dir: "asc" | "desc"
  ): Observable<ODataResponse<Product[]>> {
    this.httpOptions.params = new HttpParams({
      fromObject: {
        $orderby: `price ${dir}`,
        $top: 1,
        $select: "price",
      },
    });
    return this._httpClient.get<ODataResponse<Product[]>>(
      PRODUCT_API,
      this.httpOptions
    );
  }
}
