import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckoutProductsComponent } from './checkout-products.component';

describe('CheckoutProductsComponent', () => {
  let component: CheckoutProductsComponent;
  let fixture: ComponentFixture<CheckoutProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
