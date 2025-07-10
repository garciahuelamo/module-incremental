import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-component.component.html',
})

export class PaymentComponent {
  cardNumber = '';
  expiryDate = '';
  cvc = '';
  loading = false;

  constructor(private router: Router) {}

  processPayment() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;

      if (
        this.cardNumber === '4999 9999 9999 9999' &&
        this.expiryDate.trim() !== '' &&
        this.cvc.trim() !== ''
      ) {
        this.router.navigate(['/payment-confirmation']);
      } else {
        alert('Hay un error procesando la compra, revise los datos introducidos.');
      }
    }, 3000);
  }
}
