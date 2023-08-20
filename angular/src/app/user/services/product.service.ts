import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Filter, Pagination } from "src/app/models/model";
import {
  SAP_API_DOMAIN,
  PRODUCT_API,
  SIZE_API,
} from "src/app/models/constance";
import { HttpParams } from "@angular/common/http";
import { BehaviorSubject, Observable, map, of, switchMap } from "rxjs";
import {
  ODataResponse,
  Product,
  SizeItem,
  SizeResponse,
} from "src/app/models/response";
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
    this.products$ = this.productsBSub.asObservable().pipe(
      map((products) => {
        if (products) {
          products!.map((product) => {
            let sizeItems: SizeItem[] = product.Sizes;
            sizeItems.sort((a, b) => a.Size.height - b.Size.height);
          });
          return products;
        }
        return null;
      })
    );
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
        $top: pagination.top!,
        $expand: "Sizes($expand=Size),Colors($expand=Color)",
      },
    });
    if (pagination && pagination.orderBy) {
      let queryString = filter.pagination.orderBy!;
      params = params.append("$orderby", queryString);
    }

    let filterQueryString = "";
    if (categoryId) {
      filterQueryString = filterQueryString.concat(
        ` and category eq '${categoryId}'`
      );
    }
    if (search) {
      let format = this._formatStringUtilsService.removeVietnameseTones(search);
      filterQueryString = filterQueryString.concat(
        ` and contains(ID,'${format}')`
      );
    }
    if (priceRanges) {
      filterQueryString = filterQueryString.concat(
        ` and price ge ${priceRanges[0]} and price le ${priceRanges[1]}`
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
  findAllByIds(ids: string[]): Observable<ODataResponse<Product[]>> {
    let filterValue: string = "";
    ids.forEach((id, idx) => {
      if (idx === ids.length - 1) {
        filterValue = filterValue.concat(`ID eq '${id}'`);
      } else {
        filterValue = filterValue.concat(`ID eq '${id}' or `);
      }
    });

    this.httpOptions.params = new HttpParams({
      fromObject: {
        $filter: filterValue,
        $expand: "Sizes($expand=Size),Colors($expand=Color)",
      },
    });
    return this._httpClient.get<ODataResponse<Product[]>>(
      PRODUCT_API,
      this.httpOptions
    );
  }
  findAllProduct(filter: Filter): Observable<Product[]> {
    this.httpOptions.params = new HttpParams({
      fromObject: {
        $expand: "Sizes($expand=Size),Colors($expand=Color),Category",
      },
    });
    return this._httpClient
      .get<ODataResponse<Product[]>>(PRODUCT_API, this.httpOptions)
      .pipe(
        map((res) => {
          let products: Product[] = res.value;
          products = products.map((product) => {
            product.Sizes.sort((a, b) => a.Size.height - b.Size.height);
            product.sltColorItem = product.Colors[0];
            product.sltSizeItem = product.Sizes[0];
            return product;
          });
          let filterProducts: Product[] | undefined;
          if (filter.heightRanges?.length) {
            let heightProducts = products.filter((product) => {
              return filter.heightRanges!.some((heightRange: number[]) => {
                if (heightRange) {
                  return product.Sizes.some((size) => {
                    return (
                      size.Size.height >= heightRange[0] &&
                      size.Size.height <= heightRange[1]
                    );
                  });
                } else {
                  return false;
                }
              });
            });
            filterProducts = [];
            filterProducts.push(...heightProducts);
          }
          if (filter.weightRanges?.length) {
            let weightProducts = products.filter((product) => {
              return filter.weightRanges!.some((weightRange: number[]) => {
                if (weightRange) {
                  return product.Sizes.some((size) => {
                    return (
                      size.Size.weight >= weightRange[0] &&
                      size.Size.weight <= weightRange[1]
                    );
                  });
                } else {
                  return false;
                }
              });
            });
            if (filterProducts === undefined) {
              filterProducts = [];
            }
            filterProducts.push(...weightProducts);
          }

          if (filter.categoryIds?.length) {
            let categoryProducts = products.filter((product) => {
              return filter.categoryIds!.some((categoryId: string) => {
                console.log(categoryId);

                return categoryId === product.Category.ID;
              });
            });
            if (filterProducts === undefined) {
              filterProducts = [];
            }
            filterProducts.push(...categoryProducts);
          }
          if (filter.priceRanges?.length) {
            let priceProducts = products.filter((product) => {
              return (
                product.price >= filter.priceRanges![0] &&
                product.price <= filter.priceRanges![1]
              );
            });
            if (filterProducts === undefined) {
              filterProducts = [];
            }
            filterProducts.push(...priceProducts);
          }

          if (filterProducts != undefined) {
            return filterProducts;
          } else {
            return products;
          }
        })
      );
  }
  findAllSize(): Observable<SizeResponse[]> {
    return this._httpClient
      .get<ODataResponse<SizeResponse[]>>(SIZE_API, {
        headers: new HttpHeaders({
          responseType: "json",
        }),
      })
      .pipe(map((res) => res.value));
  }
}
