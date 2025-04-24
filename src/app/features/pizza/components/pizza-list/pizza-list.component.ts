import { Component, effect, inject, signal } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';
import { StorageService } from "../../../../core/services/storage.service";
import { AddPizzaService } from "../../services/add-pizza.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  addPizza = inject(AddPizzaService)

  constructor(private pizzaService: PizzaService) {
    effect(() => {
      this.pizzaList.set(this.pizzaService.filteredPizza())
      console.log(this.pizzaList())
    }, {allowSignalWrites: true});
  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList = signal<Pizza[]>([]);

  // public pizzaAddToStorage = signal<Pizza[]>(this.addPizza.getPizza())

  pizzaAddToStorage(pizza: Pizza){
    console.log(this.addPizza.getPizza())
    this.addPizza.setPizzaLocalStorage(pizza)
  }

  protected readonly Event = Event;
}
