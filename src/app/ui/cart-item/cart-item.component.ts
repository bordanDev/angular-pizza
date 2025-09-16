import {
  Component,
  computed,
  EventEmitter,
  HostBinding,
  inject,
  input,
  InputSignal,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { IconSize } from '../icon/enums/icon.enums';
import { CartVariantEnum } from './enums/cart-variant.enum';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  public isFilled: InputSignal<boolean> = input(false);
  public variant: InputSignal<CartVariantEnum> = input<CartVariantEnum>(
    CartVariantEnum.Default,
  );
  public isCounted: InputSignal<boolean> = input(true);
  public cartPizzas = input.required<Pizza[]>();
  private maxWidth = computed(() => (this.isFilled() ? 'unset' : '400px'));
  @HostBinding('style.max-width')
  get hostMaxWidth() {
    return this.maxWidth();
  }

  @Output() deleteOutput = new EventEmitter<Pizza>();

  deleteHandler(pizza: Pizza) {
    this.deleteOutput.emit(pizza);
  }

  private routerActive = inject(Router);

  public navigateToPage(pizzaId: number) {
    // navigate(['pizzas/pizza/' + pizzaId]);
    this.routerActive.navigateByUrl('pizzas/pizza/' + pizzaId);
  }

  priceStyle = {
    gap: '2vw',
    flexDirection: 'row-reverse',
  };

  protected readonly IconSize = IconSize;
  protected readonly CartVariantEnum = CartVariantEnum;
}
