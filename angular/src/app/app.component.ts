import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { CartService, PendingProduct } from './user/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(private _cookieService: CookieService, public cartService: CartService) {}
  ngOnInit(): void {
    let pendingProducts: PendingProduct[] = this.cartService.pendingProductsFromCookie
    console.log(pendingProducts);
    
    this.cartService.pendingProductsBSub.next(pendingProducts)
  }
}
