import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./user/components/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
  },
  // {
  //   path: "",
  //   redirectTo: "",
  //   pathMatch: "full",
  // },
  // {
  //   path: "product/:id",
  //   component: ProductDetailComponent
  // },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
