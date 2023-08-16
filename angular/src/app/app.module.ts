import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { CustomDialogModule } from './shared/custom-dialog/custom-dialog.module';
import { ProductDetailComponent } from './user/components/product-detail/product-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found/page-not-found.component';
import { HomeModule } from './user/components/home/home.module';
import { PageNotFoundModule } from './shared/page-not-found/page-not-found.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomDialogModule,
    CookieModule.withOptions(),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
