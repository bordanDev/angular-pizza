import { Component, effect, signal, WritableSignal } from '@angular/core';
import { PizzaService } from '../pizza-service/pizza.service';
import { Pizza } from '../../pizza.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  constructor(private pizzaService: PizzaService) {
    effect(() => {
      this.pizzaList.set(this.pizzaService.filteredPizza())
    }, {allowSignalWrites: true})
  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList = signal<Pizza[]>([]);

}
