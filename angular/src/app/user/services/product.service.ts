import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pagination } from 'src/app/models/model';
import { API_DOMAIN, PRODUCT_API } from 'src/app/models/constance';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ODataResponse, Product } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      responseType: 'json',
    }),
    params: new HttpParams(),
  };
  constructor(private _httpClient: HttpClient) { }
  findAll(pagination: Pagination):Observable<ODataResponse<Product[]>>{
    let params: HttpParams = new HttpParams({
      fromObject: {
        "$top": pagination.top
      }
    })
    this.httpOptions.params = params
    return this._httpClient.get<ODataResponse<Product[]>>(PRODUCT_API, this.httpOptions)
  }
}
