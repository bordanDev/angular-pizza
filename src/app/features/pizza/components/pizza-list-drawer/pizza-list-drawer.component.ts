import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PagesEnum } from '../../../../core/enums/pages.enum';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';
import { IconSize } from '../../../../ui/icon/enums/icon.enums';
import { CartDrawerStateService } from '../../../navigation/services/cart-drawer-state.service';
import { UserPizzaService } from '../../api/user-pizza.service';
import {
  isInCart,
  userPizzaStorageHelper,
} from '../../helpers/user-pizza-storage.helper';

@Component({
  selector: 'app-pizza-list-drawer',
  templateUrl: './pizza-list-drawer.component.html',
  styleUrl: './pizza-list-drawer.component.scss',
  animations: [
    trigger('slideAnimation', [
      state(
        'hidden',
        style({
          transform: 'translateX(100%)',
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translateX(0)',
        }),
      ),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in')),
    ]),
  ],
})
export class PizzaListDrawerComponent {
  private userPizzaService = inject(UserPizzaService);
  private cartPizzaService = inject(CartDrawerStateService);
  public router = inject(Router);
  protected route = inject(Route);

  protected drawerState = false;
  protected itemsForDrawer = signal<Pizza[]>([]);
  protected orderId = 1;

  constructor() {
    this.userPizzaService.userPizza$.subscribe((pizzas) => {
      this.itemsForDrawer.set(pizzas);
    });

    //////// Закрывает дровер каждый раз как срабатывает сервис
    effect(
      () => {
        this.drawerState = this.cartPizzaService.drawerFlag();
      },
      { allowSignalWrites: true },
    );
  }

  protected deleteItem(pizza: Pizza) {
    userPizzaStorageHelper(
      pizza,
      this.itemsForDrawer(),
      this.userPizzaService,
      (pizza, storage) => {
        return isInCart(pizza, storage);
      },
      () => {
        console.log('delete Item test app component');
      },
    );
  }

  protected setDrawerState(value: boolean) {
    if (!value) {
      this.router.navigate(['']);
    }
    this.cartPizzaService.setState(value);
  }

  protected routeToOrderList() {
    this.setDrawerState(false);
    this.router.navigate([PagesEnum.Order + '/' + this.orderId]);
  }

  protected totalPriceSum(): number {
    return this.itemsForDrawer().reduce((sum, item) => {
      sum = item.price + sum;
      return sum;
    }, 0);
  }

  protected readonly IconSize = IconSize;
  protected readonly PagesEnum = PagesEnum;
}
