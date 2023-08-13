import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie";
import { BehaviorSubject, Observable } from "rxjs";
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
  constructor(private _cookieService: CookieService) {
    this.pendingProductsBSub = new BehaviorSubject<PendingProduct[] | []>([]);
    this.pendingProducts$ = this.pendingProductsBSub.asObservable();
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
