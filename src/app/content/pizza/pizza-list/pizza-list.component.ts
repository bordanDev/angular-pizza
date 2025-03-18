import { Component, effect, signal, WritableSignal } from '@angular/core';
import { PizzaService } from '../pizza-service/pizza.service';
import { Pizza } from '../../pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  constructor(private pizzaService: PizzaService) { 
    effect(() => {
      this.pizzaService.pizzas$.subscribe((pizzas) => {
        this.pizzaList.set(pizzas)
      })
    }, { allowSignalWrites: true }
  )
   }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList: WritableSignal<Pizza[]> = signal([]);

}
