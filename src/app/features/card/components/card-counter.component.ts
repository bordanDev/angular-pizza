import { Component, effect, signal } from '@angular/core';
import { IconSize } from "../../../ui/icon/enums/icon.enums";
import { CartPizzaService } from "../../pizza/services/cart-pizza.service";
import { Pizza } from "../../../shared/interfaces/pizza.interface";

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent{

  counter = signal<number>(0)
  totalPrice = signal<number>(0)

  constructor(private addPizza: CartPizzaService) {

    effect(() => {
      this.counter.set(this.addPizza.localSignalStorage().length)
    }, {
      allowSignalWrites: true
    });

    effect(() => {
      let pizzas: Pizza[] = this.addPizza.localSignalStorage()
      this.totalPrice.set(pizzas.reduce((sum, cur) => {
        return sum += cur.price
      }, 0))
    }, {allowSignalWrites: true});

  }

  protected readonly IconSize = IconSize;
}
