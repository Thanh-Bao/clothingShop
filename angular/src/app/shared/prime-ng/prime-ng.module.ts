import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputNumberModule } from 'primeng/inputnumber';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownModule,
    SplitButtonModule,
    InputSwitchModule,
    ButtonModule,
    ScrollerModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    RadioButtonModule,
    CheckboxModule,
    DialogModule,
    DialogModule,
    SliderModule,
    AutoCompleteModule,
    InputNumberModule
  ]
})
export class PrimeNgModule { }
