import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'homepage-product-section',
  templateUrl: './homepage-product-section.component.html',
  styleUrls: ['./homepage-product-section.component.scss']
})
export class HomepageProductSectionComponent {
  activeDot!: any
  unActiveDot!:any
  /* fake data */
  items$: Observable<number[]> = of([1,1,1,1,1,1,1,1,1,1,1,1,1,1])
}
