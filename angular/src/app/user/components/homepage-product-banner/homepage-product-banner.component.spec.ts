import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProductBannerComponent } from './homepage-product-banner.component';

describe('HomepageProductBannerComponent', () => {
  let component: HomepageProductBannerComponent;
  let fixture: ComponentFixture<HomepageProductBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageProductBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageProductBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
