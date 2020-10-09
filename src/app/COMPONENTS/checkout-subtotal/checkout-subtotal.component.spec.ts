import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutSubtotalComponent } from './checkout-subtotal.component';

describe('CheckoutSubtotalComponent', () => {
  let component: CheckoutSubtotalComponent;
  let fixture: ComponentFixture<CheckoutSubtotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutSubtotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutSubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
