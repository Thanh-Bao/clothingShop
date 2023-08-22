import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable, catchError, forkJoin, map, of } from "rxjs";
import { Category, Product } from "src/app/models/response";
import { CategoryService } from "src/app/user/services/category.service";
import { ProductService } from "src/app/user/services/product.service";

export const RouteResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  categoryService: CategoryService = inject(CategoryService),
  productService: ProductService = inject(ProductService)
): Observable<any> => {
  let categories$: Observable<Category[]> = categoryService.findAll();
  let minPrice$ = productService.fetchMinAndMaxPriceProduct("asc").pipe(
    map((res) => {
      let product: Product = res.value[0];
      return product.price;
    })
  );
  let maxPrice$ = productService.fetchMinAndMaxPriceProduct("desc").pipe(
    map((res) => {
      let product: Product = res.value[0];
      return product.price;
    })
  );
  let data$ = forkJoin([categories$, minPrice$, maxPrice$]);
  return data$;
};
