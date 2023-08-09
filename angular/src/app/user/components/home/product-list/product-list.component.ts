import { DOCUMENT } from "@angular/common";
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable, concatMap, map, switchMap } from "rxjs";
import { Product } from "src/app/models/response";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";
import { ProductService } from "src/app/user/services/product.service";
interface SortCritera {
  name: string;
  code: string;
}
@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
// ];
export class ProductListComponent {
  @ViewChild("sidebarWrapper")
  sidebarWrapper!: ElementRef;
  @ViewChild("productGridWrapper")
  productGridWrapper!: ElementRef;

  sortCritera: SortCritera[] = [
    {
      name: "Mặc định",
      code: "",
    },
    {
      name: "Mới nhất",
      code: "createdAt desc",
    },
    {
      name: "Giá: Cao-thấp",
      code: "price desc",
    },
    {
      name: "Giá: Thấp-cao",
      code: "price asc",
    },
  ];
  selectedSortCritera: SortCritera = this.sortCritera[0];
  isShowSidebar: boolean = true;
  rangeValues: number[] = [20, 80];
  filterOptions = [
    {
      label: "Chiều cao",
      type: "checkbox",
      value: ["all"],
      options: [
        {
          name: "Tất cả",
          value: "all",
        },
        {
          name: "Dưới 150 cm",
          value: "under150",
        },
        {
          name: "150 - 160 cm",
          value: "150-160",
        },
        {
          name: "160 - 170 cm",
          value: "160-170",
        },
        {
          name: "170 - 180 cm",
          value: "170-180",
        },
        {
          name: "Trên 180 cm",
          value: "over180",
        },
      ],
    },
    {
      label: "Cân nặng",
      type: "checkbox",
      value: ["all"],
      options: [
        {
          name: "Tất cả",
          value: "all",
        },
        {
          name: "Dưới 40 kg",
          value: "under40",
        },
        {
          name: "40 - 55 kg",
          value: "40-55",
        },
        {
          name: "55 - 65 kg",
          value: "55-65",
        },
        {
          name: "65 - 80 kg",
          value: "65-80",
        },
        {
          name: "Trên 80 kgg",
          value: "over50",
        },
      ],
    },
    {
      label: "Kích thước",
      type: "checkbox",
      value: ["all"],
      options: [
        {
          name: "Tất cả",
          value: "all",
        },
        {
          name: "S",
          value: "s",
        },
        {
          name: "M",
          value: "m",
        },
        {
          name: "L",
          value: "l",
        },
        {
          name: "XL",
          value: "xl",
        },
        {
          name: "XXL",
          value: "xxl",
        },
      ],
    },
    {
      label: "Giới tính",
      type: "checkbox",
      value: ["all"],
      options: [
        {
          name: "Tất cả",
          value: "all",
        },
        {
          name: "Nam",
          value: "male",
        },
        {
          name: "Nữ",
          value: "female",
        },
        {
          name: "Unisex",
          value: "unisex",
        },
      ],
    },
    {
      label: "Phân loại",
      type: "checkbox",
      value: ["all"],
      options: [
        {
          name: "Tất cả",
          value: "all",
        },
        {
          name: "Đầm",
          value: "male",
        },
        {
          name: "Váy",
          value: "female",
        },
        {
          name: "Chân váy",
          value: "unisex",
        },
      ],
    },
  ];
  products$!: Observable<Product[]>;
  filterLabel: string = "Bộ lọc";
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private _filterSerivce: FilterService
  ) {}
  a() {
    this.document
      .getElementById("sidebarWrapper")
      ?.classList.toggle("result-no-sidebar");
    console.log(this.selectedSortCritera.code);
  }
  items!: string[];

  ngOnInit() {
    this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    this.products$ = this._filterSerivce.filter$.pipe(
      switchMap(filter => {
        return this._productService.findAll({ top: 10 }, filter).pipe(map((res) => res.value));
      })
    )
  }
  selectetSorter(value: SortCritera){
    let currFilter = this._filterSerivce.filterVal
    currFilter.pagination.orderBy = value.code
    currFilter.pagination.orderBy = value.code? value.code:undefined
    this._filterSerivce.nextFilter(currFilter)
  }
}
