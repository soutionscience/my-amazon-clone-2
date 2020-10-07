import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtotalComponent } from './subtotal.component';

describe('SubtotalComponent', () => {
  let component: SubtotalComponent;
  let fixture: ComponentFixture<SubtotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
