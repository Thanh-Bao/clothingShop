import { RouteResolver } from './product-list/option-data.resolver';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { flush } from "@angular/core/testing";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "collection/:category-id",
        component: ProductListComponent,
      },
      {
        path: "",
        component: ProductListComponent,
        resolve: {
          routeResolver: RouteResolver
        }
      },
      {
        path: "",
        redirectTo: "",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
