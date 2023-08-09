import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Filter, Pagination } from "src/app/models/model";
import { API_DOMAIN, PRODUCT_API } from "src/app/models/constance";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ODataResponse, Product } from "src/app/models/response";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      responseType: "json",
    }),
    params: new HttpParams(),
  };
  constructor(private _httpClient: HttpClient) {}
  findAll(
    pagination: Pagination,
    filter: Filter
  ): Observable<ODataResponse<Product[]>> {
    let params: HttpParams = new HttpParams({
      fromObject: {
        $top: pagination.top,
      },
    });
    if(filter.pagination.orderBy){
      let queryString = filter.pagination.orderBy;
      console.log(queryString);
      
      params = params.append("$orderby", queryString);
    }
    if (filter.categoryId) {
      let queryString = `category eq '${filter.categoryId}'`;
      params = params.append("$filter", queryString);
    }

    this.httpOptions.params = params;
    return this._httpClient.get<ODataResponse<Product[]>>(
      PRODUCT_API,
      this.httpOptions
    );
  }
}
