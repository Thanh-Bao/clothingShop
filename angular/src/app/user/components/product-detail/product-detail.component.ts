import { Component, OnInit } from "@angular/core";
import {
  Observable,
  debounceTime,
  map,
  switchMap,
  tap,
  timeout,
  timer,
} from "rxjs";
import { Product } from "src/app/models/response";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  slt = 0;
  list = [11, 1, 1, 1, 1, 1, 1, 1, 1];
  product: Product | null = null;
  constructor(
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramAsMap) => {
          return this._productService
            .findAllByIds([`${paramAsMap.get("id")}`])
            .pipe(map((res) => res.value[0]));
        })
      )
      .subscribe((product) => {
        this.product = product
      });
  }
}
