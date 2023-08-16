import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { TTDN_API } from "src/app/models/constance";
export interface CityOption {
  Type: number;
  ID: number;
  Title: string;
}
export interface DistrictOption {
  Type: string;
  ID: string;
  Title: string;
  TinhThanhID: number;
  TinhThanhTitle: string;
}
export interface TTDNResponse {
  LtsItem: CityOption[];
}
@Injectable({
  providedIn: "root",
})
export class AddressService {
  httpOptions = {
    headers: new HttpHeaders({
      responseType: "json",
    }),
    params: new HttpParams(),
  };
  constructor(private _httpClient: HttpClient) {}

  findAllCity(): Observable<CityOption[]> {
    return this._httpClient
      .get<TTDNResponse>(TTDN_API + "/city", this.httpOptions)
      .pipe(map((res) => res["LtsItem"]));
  }
  findAllDistrict(cityID: number): Observable<DistrictOption[]> {
    return this._httpClient.get<DistrictOption[]>(
      TTDN_API + `/city/${cityID}/district`,
      this.httpOptions
    );
  }
  findAllWard(disctictID: number): Observable<DistrictOption[]> {
    return this._httpClient.get<DistrictOption[]>(
      TTDN_API + `/district/${disctictID}/ward`,
      this.httpOptions
    );
  }
}
