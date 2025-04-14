import {effect, Injectable} from "@angular/core";
import { PizzaService } from "./pizza.service";
import {Pizza} from "../../../shared/interfaces/pizza.interface";

@Injectable({
  providedIn: 'root'
})

export class SearchPizzaService {



  constructor(private pizza: PizzaService) {
    // effect(
    //   () => {
    //
    //   }, {allowSignalWrites: true}
    // )
  }

  public setPizzaBySearchText(value: string){
    let filtered = this.pizza.pizzas$.subscribe(x => {
      return x.filter(pizza =>  pizza.title.toLowerCase().includes(value) || pizza.title.includes(value))
    })


  }



}
