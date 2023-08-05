import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  formGroup!: FormGroup;
  selectedItem: any;
  suggestions!: any[];
  isShowClear = true
  constructor(){

  }
  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
}
}
