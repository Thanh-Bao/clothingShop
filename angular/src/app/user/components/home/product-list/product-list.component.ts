import { DOCUMENT } from "@angular/common";
import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { DialogService } from "primeng/dynamicdialog";
import {
  Observable,
  concatMap,
  debounceTime,
  filter,
  forkJoin,
  map,
  of,
  switchMap,
  tap,
} from "rxjs";
import { Filter } from "src/app/models/model";
import { Category, Product, SizeItem } from "src/app/models/response";
import { CustomDialogComponent } from "src/app/shared/custom-dialog/custom-dialog.component";
import { CartItem } from "src/app/shared/layout/user/header/header.component";
import {
  CartService,
  PendingProduct,
} from "src/app/user/services/cart.service";
import { CategoryService } from "src/app/user/services/category.service";
import { FilterService } from "src/app/user/services/filter.service";
import { FormatStringUtilsService } from "src/app/user/services/format-string-utils.service";
import { ProductService } from "src/app/user/services/product.service";
import { AddToCartNotifycationComponent } from "./add-to-cart-notifycation/add-to-cart-notifycation.component";
import { ActivatedRoute } from "@angular/router";
interface SortCritera {
  name: string;
  code: string;
}
interface Option {
  name: string;
  value: any;
}
interface FilterGroup {
  label: string;
  type: string;
  value: any;
  fieldName: string;
  options?: Option[];
}
@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent {
  @ViewChild("sidebarWrapper")
  sidebarWrapper!: ElementRef;
  @ViewChild("productGridWrapper")
  productGridWrapper!: ElementRef;
  @ViewChild("addedPendingProductDialog")
  addedProductDialog!: CustomDialogComponent;
  fromPrice!: number;
  toPrice!: number;
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
  rangeValues: number[] = [0, 100];
  minPrice!: number;
  maxPrice!: number;
  filterOptions: FilterGroup[] = [
    {
      label: "Giá",
      type: "slider",
      value: "",
      fieldName: "priceRanges",
    },
    {
      label: "Giá từ",
      type: "input",
      value: "",
      fieldName: "priceFrom",
    },
    {
      label: "Giá đến",
      type: "input",
      value: "",
      fieldName: "priceTo",
    },
    {
      label: "Chiều cao",
      type: "checkbox",
      value: "",
      fieldName: "heightRanges",
      options: [
        {
          name: "Dưới 150 cm",
          value: [0, 150],
        },
        {
          name: "150 - 160 cm",
          value: [150, 160],
        },
        {
          name: "160 - 170 cm",
          value: [160, 170],
        },
        {
          name: "170 - 180 cm",
          value: [170, 180],
        },
        {
          name: "Trên 180 cm",
          value: [180, 250],
        },
      ],
    },
    {
      label: "Cân nặng",
      type: "checkbox",
      value: "",
      fieldName: "weightRanges",
      options: [
        {
          name: "Dưới 40 kg",
          value: [0, 39],
        },
        {
          name: "40 - 55 kg",
          value: [40, 55],
        },
        {
          name: "55 - 65 kg",
          value: [55, 65],
        },
        {
          name: "65 - 80 kg",
          value: [65, 80],
        },
        {
          name: "Trên 80 kg",
          value: [80, 300],
        },
      ],
    },
    {
      label: "Giới tính",
      type: "checkbox",
      fieldName: "genders",
      value: "",
      options: [
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
      label: "Thể loại",
      type: "checkbox",
      fieldName: "categoryIds",
      value: "",
      options: [],
    },
  ];
  products$!: Observable<Product[] | null>;
  filterLabel: string = "Bộ lọc";
  items!: string[];
  addedPendingProduct!: CartItem[];
  filterSidebarFG!: FormGroup;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private _filterSerivce: FilterService,
    private _formatStringUtilsService: FormatStringUtilsService,
    public cartService: CartService,
    private _dialogService: DialogService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute
  ) {
    this._route.data.subscribe((datas) => {
      let routeResolverDatas = datas["routeResolver"];
      this.minPrice = routeResolverDatas[1];
      this.maxPrice = routeResolverDatas[2];
      let fetchedCategories: Category[] = routeResolverDatas[0];
      let categoryOptions: Option[] = fetchedCategories.map((category) => {
        return { name: category.name, value: category.ID };
      });
      let categoryGroup = this.filterOptions.find(
        (option) => option.fieldName === "categoryIds"
      );
      if (categoryGroup) {
        categoryGroup.options = categoryOptions;
      }
      let constrols: {
        [key: string]: AbstractControl;
      } = {};
      this.filterOptions.forEach((filterGroup) => {
        if (filterGroup.type === "checkbox") {
          let formArray = this._fb.array([]) as FormArray;
          constrols[filterGroup.fieldName] = formArray;
          filterGroup.options!.forEach((option, index) => {
            formArray.push(this._fb.control(undefined));
          });
        } else if (filterGroup.type === "slider") {
          constrols[filterGroup.fieldName] = new FormControl([
            routeResolverDatas[1],
            routeResolverDatas[2],
          ]);
        } else if (filterGroup.type === "input") {
          if (filterGroup.fieldName === "priceFrom") {
            constrols[filterGroup.fieldName] = new FormControl(this.minPrice);
          } else if (filterGroup.fieldName === "priceTo") {
            constrols[filterGroup.fieldName] = new FormControl(this.maxPrice);
          }
        }
      });
      this.filterSidebarFG = this._fb.group(constrols);
    });
  }
  ngOnInit() {
    this.filterSidebarFG.get("priceRanges")?.valueChanges.subscribe(val => {
      this.filterSidebarFG.patchValue({
        priceFrom: val[0],
        priceTo: val[1],
      })
    })
    
    this.filterSidebarFG.valueChanges.pipe().subscribe((val) => {
      let filterVal: Filter = this._filterSerivce.filterVal;
      this.filterOptions
        .map((group) => {
          return group.fieldName;
        })
        .forEach((fieldName: string) => {
          if (Array.isArray(val[fieldName])) {
            let arr: any[] = val[fieldName];
            val[fieldName] = [].concat(...arr.filter((item) => item));
            filterVal[fieldName] = val[fieldName];
          }
        });
      this._filterSerivce.nextFilter(filterVal);
    });
    this.products$ = this._filterSerivce.filter$.pipe(
      switchMap((filter: Filter) => {
        return this._productService.findAllProduct(filter);
      })
    );

    this.cartService.addedCartProduct$.subscribe((addedProduct) => {
      if (addedProduct) {
        this.addedPendingProduct = addedProduct!;
      }
    });
    console.log(this.filterOptions);
  }
  a() {
    this.document
      .getElementById("sidebarWrapper")
      ?.classList.toggle("result-no-sidebar");
  }
  selectetSorter(value: SortCritera) {
    let currFilter = this._filterSerivce.filterVal;
    currFilter.pagination.orderBy = value.code;
    currFilter.pagination.orderBy = value.code ? value.code : undefined;
    this._filterSerivce.nextFilter(currFilter);
  }
  updateSliderRanges() {
    this.rangeValues = [this.rangeValues[0], this.rangeValues[1]];
  }
  applySidebarFilter() {
    let filter: Filter = this._filterSerivce.filterVal;
    filter.priceRanges = this.rangeValues;
    filter.heightRanges = this.filterOptions[0].value as number[][];
    this._filterSerivce.nextFilter(filter);
  }

  selectSize(event: MouseEvent, product: Product, sltSizeItem: SizeItem) {
    event.preventDefault();
    event.stopPropagation();
    product.sltSizeItem = sltSizeItem;
    this.cartService.addToCart({
      productID: product.ID,
      sizeID: sltSizeItem.ID,
      colorID: product.sltColorItem.ID,
      quantity: 1,
    });
    let cartItem: CartItem = {
      product,
      colorItem: product.sltColorItem,
      sizeItem: product.sltSizeItem,
      quantity: 1,
    };
    let ref = this._dialogService.open(AddToCartNotifycationComponent, {
      header: "Đã thêm vào giỏ hàng",
      position: "topright",
      modal: false,
      data: cartItem,
      showHeader: false,
      closeOnEscape: true,
    });
    setTimeout(() => {
      ref.close();
    }, 1000);
  }
}
