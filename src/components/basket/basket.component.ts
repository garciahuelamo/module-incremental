
import { Component, OnInit } from '@angular/core';
import { BasketService, BasketItem } from '../../services/basket-service.service';
import { CommonModule } from '@angular/common';    
import { FormsModule } from '@angular/forms';     
@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems: BasketItem[] = [];

  formData = {
    nombre: '',
    apellido: '',
    direccion: '',
    cp: '',
    telefono: ''
  };

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basketService.basketItems$.subscribe(items => {
      this.basketItems = items;
    });
  }

  get total() {
    return this.basketItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  }

  onSubmit() {
    console.log('Datos de envío:', this.formData);
    alert('Formulario enviado. Revisa consola.');
  }
}
