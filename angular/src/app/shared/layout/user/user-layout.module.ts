import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomDialogComponent } from '../../custom-dialog/custom-dialog.component';
import { CustomDialogModule } from '../../custom-dialog/custom-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CustomDialogModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNgModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class UserLayoutModule { }
