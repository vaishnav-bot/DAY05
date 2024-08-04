import { Component } from '@angular/core';
import { CardsComponent } from "../../unit/cards/cards.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
}
