import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-service.service';

export interface BasketItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private readonly STORAGE_KEY = 'basket_items';

  private basketItemsSubject = new BehaviorSubject<BasketItem[]>(this.loadFromLocalStorage());
  basketItems$ = this.basketItemsSubject.asObservable();

  get basketItems(): BasketItem[] {
    return this.basketItemsSubject.value;
  }

  addProduct(product: Product, quantity: number = 1) {
    const items = [...this.basketItems];
    const index = items.findIndex(item => item.product.id === product.id);

    if (index >= 0) {
      items[index].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    this.basketItemsSubject.next(items);
    this.saveToLocalStorage(items);
  }

  private loadFromLocalStorage(): BasketItem[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      try {
        return JSON.parse(data);
      } catch {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }
    return [];
  }

  private saveToLocalStorage(items: BasketItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
  }

  clearBasket() {
    this.basketItemsSubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
