import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartNotifycationComponent } from './add-to-cart-notifycation.component';

describe('AddToCartNotifycationComponent', () => {
  let component: AddToCartNotifycationComponent;
  let fixture: ComponentFixture<AddToCartNotifycationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartNotifycationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartNotifycationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
