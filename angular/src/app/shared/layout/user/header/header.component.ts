import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Category } from 'src/app/models/response';
import { ThemeService } from 'src/app/theme.service';
import { CategoryService } from 'src/app/user/services/category.service';

@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  formGroup!: FormGroup;
  selectedItem: any;
  suggestions!: any[];
  isShowClear = true
  categories$!: Observable<Category[]>
  selectedCategory!: Category
  constructor(private _categoryService: CategoryService){

  }
  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
  ngOnInit(): void {
    this.categories$ = this._categoryService.findAll().pipe(
      map(res => res.value),
      tap(res => {
        this.selectedCategory = res[0]
      })
    )
  }
  selectCategory(cateogry: Category){
    this.selectedCategory = cateogry
  }
}
