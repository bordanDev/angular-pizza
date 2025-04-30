import { Component, input } from '@angular/core';
import { Pizza } from "../../shared/interfaces/pizza.interface";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  cartPizzas = input<Pizza[]>([])

}
