import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { PagesEnum } from './core/enums/pages.enum';
import { NotificationService } from './core/services/notification.service';
import { CartDrawerStateService } from './features/navigation/services/cart-drawer-state.service';
import { UserPizzaService } from './features/pizza/api/user-pizza.service';
import {
  isInCart,
  userPizzaStorageHelper,
} from './features/pizza/helpers/user-pizza-storage.helper';
import { PizzaService } from './features/pizza/services/pizza.service';
import { Notification } from './shared/interfaces/notification.interface';
import { Pizza } from './shared/interfaces/pizza.interface';
import { IconSize } from './ui/icon/enums/icon.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
    this.userPizzaService.userPizza$.subscribe();
    this.userPizzaService.getUserPizza().subscribe();
    this.userPizzaService.userPizza$.subscribe();
  }

  itemsForDrawer = signal<Pizza[]>([]);
  cartPizzaService = inject(CartDrawerStateService);
  private not = inject(NotificationService);

  notificationActivator = false;
  notificationContent: Notification = { title: '1', subtitle: '1' };

  constructor() {
    this.userPizzaService.userPizza$.subscribe((pizzas) => {
      this.itemsForDrawer.set(pizzas);
    });

    this.not.$handleNotification.subscribe((content) => {
      console.log(content);
      if (content != undefined) {
        this.notificationContent = content;
        this.notificationActivator = true;
      } else {
        this.notificationActivator = false;
      }
    });
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
