import { Component, effect, signal } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';

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
