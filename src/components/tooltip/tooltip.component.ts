import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {

  menuOpen = false;
  title: string;

  constructor() {
    this.title = 'Tooltip Component';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
