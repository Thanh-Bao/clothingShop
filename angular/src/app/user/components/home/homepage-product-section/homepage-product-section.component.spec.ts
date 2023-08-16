import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageProductSectionComponent } from './homepage-product-section.component';

describe('HomepageProductSectionComponent', () => {
  let component: HomepageProductSectionComponent;
  let fixture: ComponentFixture<HomepageProductSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageProductSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
