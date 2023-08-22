import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Filter, Pagination } from "src/app/models/model";
import { Category } from "src/app/models/response";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  defaultPagination!: Pagination;
  defaultFilter!: Filter;
  private filterBSub!: BehaviorSubject<Filter>;
  filter$: Observable<Filter>;
  nextFilter(category: Filter) {
    this.filterBSub.next(category);
  }
  get filterVal() {
    return this.filterBSub.value;
  }
  constructor() {
    this.defaultPagination = {
      top: 10,
    };
    this.defaultFilter = {
      pagination: this.defaultPagination,
    };
    this.filterBSub = new BehaviorSubject<Filter>(this.defaultFilter);
    this.filter$ = this.filterBSub.asObservable();
  }
}
