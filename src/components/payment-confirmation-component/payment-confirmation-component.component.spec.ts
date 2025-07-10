import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmationComponentComponent } from './payment-confirmation-component.component';

describe('PaymentConfirmationComponentComponent', () => {
  let component: PaymentConfirmationComponentComponent;
  let fixture: ComponentFixture<PaymentConfirmationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentConfirmationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentConfirmationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
