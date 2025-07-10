import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { PaymentComponent } from '../payment-component/payment-component.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SearchComponent, ProductDetailsComponent, PaymentComponent, CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedProductId: number | null = null;
  showPayment: boolean = false;

  onProductSelected(productId: number) {
    this.selectedProductId = productId;
    this.showPayment = false;  // reset payment view
  }

  onProceedToPayment() {
    this.showPayment = true;
  }
}
