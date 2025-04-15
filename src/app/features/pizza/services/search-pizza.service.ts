import {Injectable, signal} from "@angular/core";
import { PizzaService } from "./pizza.service";
import {Pizza} from "../../../shared/interfaces/pizza.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SearchPizzaService {

  constructor(private pizza: PizzaService) {}

  public filteredPizzas$ = new BehaviorSubject<Pizza[]>([]);

  public setPizzaBySearchText(value: string){
    this.pizza.pizzas$.subscribe(x => {
      this.filteredPizzas$.next(x.filter(pizza => pizza.title.startsWith(value) || pizza.title.toLowerCase().startsWith(value)))
    })

    this.filteredPizzaByText.set(this.filteredPizzas$.getValue())
  }

  public readonly filteredPizzaByText = signal<Pizza[]>([])

}
