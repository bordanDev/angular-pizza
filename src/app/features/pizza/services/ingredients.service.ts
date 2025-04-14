import { Pizza } from "../../../shared/interfaces/pizza.interface";

export class IngredientsService {
    static getIngredients(pizzas: Pizza[]){
      let allIngredients: string[] = [];
      pizzas.map(pizza => {
        pizza.ingredients.filter(ingred => {
          allIngredients.includes(ingred) ? '' : allIngredients.push(ingred)
        })
      })
      return allIngredients.map(value => { return {value: value, label: value} })
    }

}
