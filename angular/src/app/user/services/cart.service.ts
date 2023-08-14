import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  map,
  of,
  switchMap,
} from "rxjs";
import { CartItem } from "src/app/shared/layout/user/header/header.component";
import { ProductService } from "./product.service";
export interface PendingProduct {
  productID: string;
  quantity: number;
}
@Injectable({
  providedIn: "root",
})
export class CartService {
  pendingProductKey: string = "pendingProducts";
  pendingProductsBSub!: BehaviorSubject<PendingProduct[] | []>;
  pendingProducts$!: Observable<PendingProduct[] | []>;

  cartProducts$!: Observable<CartItem[] | []>;
  constructor(
    private _cookieService: CookieService,
    private _productService: ProductService
  ) {
    this.pendingProductsBSub = new BehaviorSubject<PendingProduct[] | []>([]);
    this.pendingProducts$ = this.pendingProductsBSub.asObservable();

    this.cartProducts$ = this.pendingProducts$.pipe(
      switchMap((pendingProducts: PendingProduct[]) => {
        if(pendingProducts.length){
          this.addPendingProductsToCookie(pendingProducts)
          return this._productService
            .findAllByIds(pendingProducts.map((p) => p.productID))
            .pipe(
              map((res) => res.value),
              concatMap((val) => {
                let cartItems: CartItem[] = [];
                val.forEach((product) => {
                  let foundCookieProduct: PendingProduct | undefined =
                    pendingProducts.find(
                      (cProduct) => cProduct.productID === product.ID
                    );
                  if (foundCookieProduct) {
                    cartItems.push({
                      product: product,
                      quantity: foundCookieProduct.quantity,
                    });
                  }
                });
                return of(cartItems);
              })
            );
        }else{
          this._cookieService.remove(this.pendingProductKey)
          return of([])
        }
      })
    );
  }

  addToCart(productID: string, quantity: number) {
    let pendingProducts: PendingProduct[] = this.pendingProductsVal;
    let foundPendingProduct = pendingProducts.find(
      (p) => p.productID === productID
    );

    if (foundPendingProduct) {
      foundPendingProduct.quantity = foundPendingProduct.quantity + quantity;
    } else {
      pendingProducts.push({ productID, quantity });
    }
    this._cookieService.put(
      this.pendingProductKey,
      JSON.stringify(pendingProducts)
    );

    this.pendingProductsBSub.next(pendingProducts);
  }
  updateCart(productID: string, quantity: number) {
    let pendingProducts: PendingProduct[] = this.pendingProductsVal;
    let foundPendingProduct = pendingProducts.find(
      (p) => p.productID === productID
    );

    if (foundPendingProduct) {
      foundPendingProduct.quantity = quantity
    } else {
      pendingProducts.push({ productID, quantity });
    }
    this._cookieService.put(
      this.pendingProductKey,
      JSON.stringify(pendingProducts)
    );

    this.pendingProductsBSub.next(pendingProducts);
  }
  addPendingProductsToCookie(pendingProducts: PendingProduct[]){
      this._cookieService.put(this.pendingProductKey, JSON.stringify(pendingProducts))
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
