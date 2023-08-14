import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLayoutModule } from '../shared/layout/user/user-layout.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserLayoutModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
