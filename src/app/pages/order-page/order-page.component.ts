import { Component } from '@angular/core';
import { UserPizzaService } from '../../features/pizza/api/user-pizza.service';
import { Pizza } from '../../shared/interfaces/pizza.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent {
  orderPizza: Pizza[] = [];

  constructor(userPizzaService: UserPizzaService) {
    userPizzaService.userPizza$.subscribe((pizza) => {
      this.orderPizza = pizza;
    });
  }
}
