import { Injectable } from "@angular/core";
import {Pizza} from "../../pizza.model";

@Injectable({
    providedIn: 'root'
})
export class Ingredients {
    constructor(){
    }

    ingredients(pizzas: Pizza[]){
      let allIngredients: string[] = [];

      pizzas.map(pizza => {
        pizza.ingredients.filter(ingred => {
          allIngredients.includes(ingred) ? '' : allIngredients.push(ingred)
        })
      })

      return allIngredients.map(value => { return {value: value, label: value} })

    }




}
