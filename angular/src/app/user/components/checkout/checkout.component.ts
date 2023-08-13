import { Component } from '@angular/core';
import { Product } from 'src/app/models/response';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

    constructor(private productService: ProductService) {}

    ngOnInit() {
      
    }

}
