import { Component } from "@angular/core";
import { Product } from "src/app/models/response";
import { ProductService } from "../../services/product.service";
import {
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { AddressService } from "../../services/address.service";
import { Observable, concatMap, map, of, switchMap } from "rxjs";
import { CartItem } from "src/app/shared/layout/user/header/header.component";
import { CartService, PendingProduct } from "../../services/cart.service";
export interface DynamicField {
  type: string;
  label: string;
  fieldName: string;
  columnClass: string;
  value: "";
  options?: Option[];
  validators?:
    | FormControlOptions
    | ValidatorFn
    | ValidatorFn[]
    | null
    | undefined;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined[];
}
export interface Option {
  key: string;
  code: any;
}
interface City {
  name: string;
  code: string;
}
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent {
  value!: string;
  cities!: City[];

  selectedCity!: City;
  g: DynamicField[][] = [
    [
      {
        type: "field",
        label: "Họ tên",
        fieldName: "fullName",
        columnClass: "lg:col-6 md:col-6 col-6",
        value: "",
        validators: [Validators.required],
      },
      {
        type: "field",
        label: "Số điện thoại",
        fieldName: "phoneNumber",
        columnClass: "lg:col-6 md:col-6 col-6",
        value: "",
        validators: [Validators.required],
      },
    ],
    // [
    //   {
    //     type: "field",
    //     label: "Email",
    //     fieldName: "email",
    //     columnClass: "lg:col-12 md:col-12 col-12",
    //     value: "",
    //     validators: [Validators.email],
    //   },
    // ],
    [
      {
        type: "field",
        label: "Địa chỉ",
        fieldName: "address",
        columnClass: "lg:col-12 md:col-12 col-12",
        value: "",
        validators: [Validators.required],
      },
    ],
    [
      {
        type: "dropdown",
        label: "Chọn Tỉnh/Thành",
        fieldName: "province",
        columnClass: "lg:col-4 md:col-12 col-12",
        value: "",
        options: [],
        validators: [Validators.required],
      },
      {
        type: "dropdown",
        label: "Chọn Quận/Huyện",
        fieldName: "district",
        columnClass: "lg:col-4 md:col-12 col-12",
        value: "",
        options: [],
        validators: [Validators.required],
      },
      {
        type: "dropdown",
        label: "Chọn Phường/Xã",
        fieldName: "ward",
        columnClass: "lg:col-4 md:col-12 col-12",
        value: "",
        options: [],
        validators: [Validators.required],
      },
    ],
    [
      {
        type: "textarea",
        label: "Ghi chú thêm",
        fieldName: "note",
        columnClass: "lg:col-12 md:col-12 col-12",
        value: "",
      },
    ],
  ];
  deliveryFG!: FormGroup;
  constructor(
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _addressService: AddressService,
    private _cartService: CartService
  ) {
    let controls: any = {};
    this.g.forEach((gi) => {
      gi.forEach((f) => {
        if (f.validators) {
          controls[f.fieldName] = this._fb.control("", f.validators);
        } else {
          controls[f.fieldName] = this._fb.control("");
        }
      });
    });
    this.deliveryFG = this._fb.group(controls);

    this._addressService.findAllCity().subscribe((cities) => {
      let options: Option[] | undefined = this.g[3].find(
        (prop) => prop.fieldName === "province"
      )!.options;
      if (options != undefined) {
        cities.forEach((c) => {
          options!.push({
            key: c.Title,
            code: c.ID,
          });
        });
      }
    });
    this._addressService.findAllDistrict(2).subscribe((v) => console.log(v));
    this.deliveryFG.valueChanges.subscribe((v) => console.log(v));
  }
  get districtControl(): FormControl {
    return this.deliveryFG.get("district") as FormControl;
  }
  get wardControl(): FormControl {
    return this.deliveryFG.get("ward") as FormControl;
  }

  paymentMethods = [
    {
      label: "COD",
      desc: "Thanh toán khi nhận hàng",
      value: "cod",
      logo: "https://www.coolmate.me/images/COD.svg",
    },
    {
      label: "MoMo",
      desc: "Thanh toán thông qua ví điện tử Momo",
      value: "momo",
      logo: "https://www.coolmate.me/images/momo-icon.png",
    },
  ];
  sltedPaymentMethod: string = this.paymentMethods[0].value;

  cartProducts$!: Observable<CartItem[]>;
  sortOptions!: any[];
  sortOrder!: number;
  sortField!: string;
  ngOnInit() {
    this.sortOptions = [
      { label: "Giá cao tới thấp", value: "!price" },
      { label: "Giá thấp tới cao", value: "price" },
    ];
    this.deliveryFG
      .get("province")
      ?.valueChanges.pipe(
        switchMap((val) => {
          if (this.districtControl.value) {
            this.districtControl.reset();
          }
          if (this.wardControl.value) {
            this.wardControl.reset();
          }
          return this._addressService.findAllDistrict(val.code);
        })
      )
      .subscribe((districts) => {
        let options: Option[] = this.g[3].find(
          (prop) => prop.fieldName === "district"
        )!.options!;
        let wardOptions: Option[] = this.g[3].find(
          (prop) => prop.fieldName === "ward"
        )!.options!;
        options.splice(0, options.length);
        wardOptions.splice(0, wardOptions.length);
        districts.forEach((c) => {
          options!.push({
            key: c.Title,
            code: c.ID,
          });
        });
      });

    this.deliveryFG
      .get("district")
      ?.valueChanges.pipe(
        switchMap((val) => {
          if (val) {
            this.wardControl.reset();
            return this._addressService.findAllWard(val.code);
          } else {
            return of([]);
          }
        })
      )
      .subscribe((wards) => {
        let options: Option[] = this.g[3].find(
          (prop) => prop.fieldName === "ward"
        )!.options!;
        options.splice(0, options.length);
        wards.forEach((c) => {
          options!.push({
            key: c.Title,
            code: c.ID,
          });
        });
      });

    /* fetch Cart Item */
    this.cartProducts$ = this._cartService.cartProducts$;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
    this.sortField = "product." + this.sortField;
  }
  updateQuantity(productID: string, colorID: string, sizeID: string, quantity: number) {
    this._cartService.updateQuantity({productID, colorID, sizeID, quantity});
  }
  removeCartProduct(productID: string) {
    let pendingProducts: PendingProduct[] =
      this._cartService.pendingProductsVal;
    pendingProducts = pendingProducts.filter(
      (pendingProduct) => pendingProduct.productID !== productID
    );
    this._cartService.pendingProductsBSub.next(pendingProducts);
  }
}
