import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutProductsComponent } from './checkout-products.component';

describe('CheckoutProductsComponent', () => {
  let component: CheckoutProductsComponent;
  let fixture: ComponentFixture<CheckoutProductsComponent>;

  beforeEach(async(() => {
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
