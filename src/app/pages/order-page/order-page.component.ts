import { Component } from '@angular/core';
import { UserPizzaService } from '../../features/pizza/api/user-pizza.service';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { isInCart, userPizzaStorageHelper } from "../../features/pizza/helpers/user-pizza-storage.helper";
import { CartVariantEnum } from "../../ui/cart-item/enums/cart-variant.enum";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent {
  orderPizza: Pizza[] = [];

  constructor(public userPizzaService: UserPizzaService) {
    userPizzaService.userPizza$.subscribe((pizza) => {
      this.orderPizza = pizza;
    });
  }

  get total(){
    return this.orderPizza.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0)
  }

  deleteItem(pizza: Pizza) {
    userPizzaStorageHelper(pizza, this.orderPizza, this.userPizzaService, isInCart, () => {
      console.log('helper is work')
    })
  }

  protected readonly CartVariantEnum = CartVariantEnum;
}
