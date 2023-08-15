import { CookieService } from 'ngx-cookie';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { CartService, PendingProduct } from './user/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private _cookieService: CookieService, public cartService: CartService) {}
  ngOnInit(): void {
    let pendingProducts: PendingProduct[] = this.cartService.pendingProductsFromCookie
    this.cartService.pendingProductsBSub.next(pendingProducts)
  }
}
