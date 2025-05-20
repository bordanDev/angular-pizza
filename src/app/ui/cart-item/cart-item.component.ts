import { Component, EventEmitter, input, Output } from '@angular/core';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { IconSize } from '../icon/enums/icon.enums';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  cartPizzas = input<Pizza[]>([]);

  @Output() deleteOutput = new EventEmitter<Pizza>();

  deleteHandler(pizza: Pizza) {
    this.deleteOutput.emit(pizza);
  }

  protected readonly IconSize = IconSize;
}
