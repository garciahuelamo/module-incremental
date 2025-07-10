import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BasketComponent } from '../components/basket/basket.component';
import { PaymentComponent } from '../components/payment-component/payment-component.component';
import { PaymentConfirmationComponent } from '../components/payment-confirmation-component/payment-confirmation-component.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-confirmation', component: PaymentConfirmationComponent },
  { path: '**', redirectTo: 'home' },
];
