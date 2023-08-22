import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'user-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private __themeService: ThemeService){}
  changeTheme(theme: string){
    this.__themeService.switchTheme(theme)
  }
}
