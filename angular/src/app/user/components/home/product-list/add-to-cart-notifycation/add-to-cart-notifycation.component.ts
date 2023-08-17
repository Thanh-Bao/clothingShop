import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CartItem } from 'src/app/shared/layout/user/header/header.component';

@Component({
  selector: 'app-add-to-cart-notifycation',
  templateUrl: './add-to-cart-notifycation.component.html',
  styleUrls: ['./add-to-cart-notifycation.component.scss']
})
export class AddToCartNotifycationComponent implements OnInit{
  cartItem!: CartItem
  constructor(
    private dynamicDialogConfig: DynamicDialogConfig,
    private dynamicDialogRef: DynamicDialogRef
  ) {}
  ngOnInit(): void {
    this.cartItem = this.dynamicDialogConfig.data
    
  }
}
