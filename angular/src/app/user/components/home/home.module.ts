import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomepageProductSectionComponent } from './homepage-product-section/homepage-product-section.component';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { HomepageProductBannerComponent } from '../homepage-product-banner/homepage-product-banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';
import { CustomDialogModule } from 'src/app/shared/custom-dialog/custom-dialog.module';
import { CheckoutComponent } from '../checkout/checkout.component';
@NgModule({
  declarations: [
    HomeComponent,
    HomepageProductSectionComponent,
    HomepageProductBannerComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CustomDialogModule
  ],
})
export class HomeModule {}
