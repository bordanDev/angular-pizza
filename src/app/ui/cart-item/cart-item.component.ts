import {
  Component,
  computed,
  EventEmitter,
  HostBinding,
  input,
  InputSignal,
  Output,
} from '@angular/core';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { IconSize } from '../icon/enums/icon.enums';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  isFilled: InputSignal<boolean> = input(false);
  private maxWidth = computed(() => (this.isFilled() ? 'unset' : '400px'));
  @HostBinding('style.max-width')
  get hostMaxWidth() {
    return this.maxWidth();
  }

  type: InputSignal<'default' | 'order'> = input.required();

  cartPizzas = input.required<Pizza[]>();

  @Output() deleteOutput = new EventEmitter<Pizza>();

  deleteHandler(pizza: Pizza) {
    this.deleteOutput.emit(pizza);
  }

  protected readonly IconSize = IconSize;
}
