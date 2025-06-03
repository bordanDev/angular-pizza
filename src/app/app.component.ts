import { Component, effect, inject, OnInit, signal } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Pizza } from './shared/interfaces/pizza.interface';
import { CartDrawerStateService } from './features/navigation/services/cart-drawer-state.service';
import { IconSize } from './ui/icon/enums/icon.enums';
import { environment } from '../environments/environment';
import { PizzaService } from './features/pizza/services/pizza.service';
import { UserPizzaService } from './features/pizza/api/user-pizza.service';
import {
  isInCart,
  userPizzaStorageHelper,
} from './features/pizza/helpers/user-pizza-storage.helper';
import { PagesEnum } from './core/enums/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
export class AppComponent implements OnInit {
  title = 'Angular Pizza';

  private pizzaService = inject(PizzaService);
  private userPizzaService = inject(UserPizzaService);

  ngOnInit() {
    console.log(environment.production);
    this.pizzaService.loadPizza().subscribe();
    this.pizzaService.loadUi().subscribe();
    this.pizzaService.loadAdditionalIngredUi().subscribe();
    this.userPizzaService.userPizza$.subscribe((pizza) => {
      console.log(pizza);
    });
    this.userPizzaService.getUserPizza().subscribe();
    this.userPizzaService.userPizza$.subscribe((pizza) => {
      console.log(pizza);
    });
    console.log('END of INIT APP');
  }

  itemsForDrawer = signal<Pizza[]>([]);

  drawerState = false;
  cartPizzaService = inject(CartDrawerStateService);

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

  setDrawerState(value: boolean) {
    this.cartPizzaService.setState(value);
  }

  deleteItem(pizza: Pizza) {
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

  totalPriceSum(): number {
    return this.itemsForDrawer().reduce((sum, item) => {
      sum = item.price + sum;
      return sum;
    }, 0);
  }

  orderId = 1;

  protected readonly IconSize = IconSize;
  protected readonly userPizzaStorageHelper = userPizzaStorageHelper;
  protected readonly PagesEnum = PagesEnum;
}
