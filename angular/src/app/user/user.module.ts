import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLayoutModule } from '../shared/layout/user/user-layout.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    UserComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserLayoutModule,
    PrimeNgModule
  ]
})
export class UserModule { }
