import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product-service.service';
import { FormsModule } from '@angular/forms';
import { BasketService } from '../../services/basket-service.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProducts().subscribe(products => {
        this.product = products.find(p => p.id === +id) || null;
      });
    }
  }

  addToCart() {
    if (this.product) {
      this.basketService.addProduct(this.product, this.quantity);
      alert(`${this.quantity} x ${this.product.title} añadido al carrito.`);
    }
  }
}
