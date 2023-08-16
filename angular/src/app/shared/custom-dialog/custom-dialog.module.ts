import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDialogComponent } from './custom-dialog.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CustomDialogComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CustomDialogComponent
  ]
})
export class CustomDialogModule { }
