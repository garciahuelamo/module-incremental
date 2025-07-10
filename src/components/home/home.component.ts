import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { SearchComponent } from '../search/search.component';
import { ProductService, Product } from '../../services/product-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.products = data;
    });
  }

  onSearch(term: string) {
    const lowerTerm = term.toLowerCase();
    this.products = this.allProducts.filter(p =>
      p.title.toLowerCase().includes(lowerTerm)
    );
  }
}
