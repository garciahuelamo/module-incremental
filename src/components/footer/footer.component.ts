import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  title: string;
  name: string;
  birthday: number;

  constructor() {
    this.title = 'Footer Component';
    this.name = "Ángela García Huélamo";
    this.birthday = new Date().getFullYear();
  }
}
