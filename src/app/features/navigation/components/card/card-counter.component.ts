import { Component, signal } from '@angular/core';
import { IconSize } from '../../../../ui/icon/enums/icon.enums';
import { UserPizzaService } from '../../../pizza/api/user-pizza.service';

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss'],
})
export class CardCounterComponent {
  counter = signal<number>(0);
  totalPrice = signal<number>(0);

  constructor(private userPizzaService: UserPizzaService) {
    this.userPizzaService.userPizza$.subscribe((pizzas) => {
      console.log(pizzas, 'ATTENTION');
      this.counter.set(pizzas.length);
      this.totalPrice.set(
        Number(
          pizzas
            .reduce((sum, cur) => {
              return sum + cur.price;
            }, 0)
            .toFixed(2),
        ),
      );
    });
  }

  protected readonly IconSize = IconSize;
}
