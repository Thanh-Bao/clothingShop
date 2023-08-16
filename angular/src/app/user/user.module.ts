import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLayoutModule } from '../shared/layout/user/user-layout.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PageNotFoundModule } from '../shared/page-not-found/page-not-found.module';


@NgModule({
  declarations: [
    UserComponent,
    CheckoutComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserLayoutModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundModule
  ]
})
export class UserModule { }
