import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Observable, first, last, of } from 'rxjs';

@Component({
  selector: 'my-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('imageCarouselList')
  imageCarouselList!: ElementRef<any>;
  @ViewChild('carouselArrowPrev')
  carouselArrowPrev!: ElementRef<any>;
  @ViewChild('carouselArrowNext')
  carouselArrowNext!: ElementRef<any>;
  timer!: number;
  carouselIntervalId!: any;
  currentIdx: number = 0;
  listWidth!: number;
  itemWidth!: number;
  itemsPerPart!: number;
  step: number = 1;
  firstIdx!: number;
  lastIdx!: number;
  positionX!: number;
  remainderItems!: number;
  @Input()
  isPerItemInStep!: boolean;
  @Input()
  itemRender!: TemplateRef<any>;
  @Input()
  dotRender!: TemplateRef<any>;
  @Input()
  isShowController = true;
  @Input()
  items$!: Observable<any[]>;
  itemsSize: number = 0;
  @Input()
  noGutters: boolean = true;
  dotArray!: number[];
  isShowPreBtn = false;
  isShowNextBtn = true;
  constructor(private ref: ChangeDetectorRef, private render: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (this.items$) {
      this.items$.subscribe((items) => {
        if(items.length > 0){
          this.listWidth = this.imageCarouselList.nativeElement.offsetWidth;
          this.itemWidth =
            this.imageCarouselList.nativeElement.firstChild.offsetWidth;
          this.itemsPerPart = Math.ceil(this.listWidth / this.itemWidth);
          this.itemsSize = items.length;
          this.firstIdx = 0;
          this.lastIdx = this.itemsSize - 1;
          this.step = this.isPerItemInStep === true ? 1 : this.itemsPerPart;
          this.currentIdx = this.firstIdx;
          this.remainderItems = !this.isPerItemInStep
            ? items.length % this.itemsPerPart
            : 1;
          this.createDotArray();
          this.ref.detectChanges();
        }
      });
    }
  }
  private createDotArray() {
    let dotSize = 0;
    if (this.isPerItemInStep) {
      dotSize = Math.ceil(this.itemsSize / this.step) - this.itemsPerPart + 1;
    } else {
      dotSize = Math.ceil(this.itemsSize / this.step);
    }
    console.log(dotSize);
    
    this.dotArray = Array(dotSize)
      .fill(0)
      .map((_, index) => {
        return index * this.step;
      });
    this.dotArray[this.dotArray.length - 1] =
      this.itemsSize - this.itemsPerPart;
  }
  processCarousel(passedIdx: number) {
    if (passedIdx + this.itemsPerPart >= this.itemsSize) {
      this.currentIdx = passedIdx - this.step + this.remainderItems;
      this.isShowPreBtn = true;
      this.isShowNextBtn = false;
    } else if (
      this.currentIdx - this.step === passedIdx &&
      this.currentIdx + this.step === this.itemsSize
    ) {
      this.currentIdx -= this.remainderItems;
      this.isShowPreBtn = true;
      this.isShowNextBtn = true;
    } else if (passedIdx === 0) {
      this.currentIdx = 0;
      this.isShowPreBtn = false;
      this.isShowNextBtn = true;
    } else {
      this.currentIdx = passedIdx;
      this.isShowNextBtn = true;
      this.isShowPreBtn = true;
    }
    console.log(this.currentIdx);

    this.processUI(this.currentIdx);
  }

  private processUI(idx: number) {
    this.positionX = -(idx * this.itemWidth);
    this.imageCarouselList.nativeElement.style.transitionDuration = `500ms`;
    this.imageCarouselList.nativeElement.style.transform = `translateX(${this.positionX}px)`;
  }
  /*
    Description: Method re-get width and height of list and first item (same each item in list)
    after user resize web
    - compute truth width = length of number of item
    - check remainder
    - compute part number of carousel
    */
  recomputeResponsive() {}
  previous() {
    this.processCarousel(this.currentIdx - this.step);
  }
  next() {
    this.processCarousel(this.currentIdx + this.step);
  }
}
