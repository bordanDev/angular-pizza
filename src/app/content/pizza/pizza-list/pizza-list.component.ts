import { Component, effect, signal } from '@angular/core';
import { PizzaService } from '../pizza-services/pizza.service';
import { Pizza } from '../../pizza.model';
import { Interval } from '../../../ui';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  constructor(private pizzaService: PizzaService) {
    effect(() => {
      this.pizzaList.set(this.pizzaService.filteredPizza())
      console.log(this.pizzaList())
    }, {allowSignalWrites: true});

  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList = signal<Pizza[]>([]);


}
