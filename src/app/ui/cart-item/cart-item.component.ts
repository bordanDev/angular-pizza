import {
  Component,
  computed,
  EventEmitter,
  HostBinding, inject,
  input,
  InputSignal,
  Output,
} from '@angular/core';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { IconSize } from '../icon/enums/icon.enums';
import { CartVariantEnum } from "./enums/cart-variant.enum";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent{
  isFilled: InputSignal<boolean> = input(false);
  private maxWidth = computed(() => (this.isFilled() ? 'unset' : '400px'));
  @HostBinding('style.max-width')
  get hostMaxWidth() {
    return this.maxWidth();
  }
  variant: InputSignal<CartVariantEnum> = input<CartVariantEnum>(CartVariantEnum.Default)
  cartPizzas = input.required<Pizza[]>();
  @Output() deleteOutput = new EventEmitter<Pizza>();

  deleteHandler(pizza: Pizza) {
    this.deleteOutput.emit(pizza);
  }

  private routerActive = inject(Router);

  public navigateToPage(pizzaId: number){
    this.routerActive.navigate(['pizzas/pizza/' + pizzaId])
  }

  priceStyle = {
    gap: '2vw',
    flexDirection: 'row-reverse'
  }

  protected readonly IconSize = IconSize;
  protected readonly CartVariantEnum = CartVariantEnum;
}
