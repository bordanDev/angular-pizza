import { Pizza } from "../../../shared/interfaces/pizza.interface";

export class IngredientsService {
    static getIngredients(pizzas: Pizza[]){
      const allIngredients: string[] = [];
      pizzas.map(pizza => {
        pizza.ingredients.filter(ingred => {
          if(!allIngredients.includes(ingred)){
            allIngredients.push(ingred)
          }
        })
      })
      return allIngredients.map(value => { return {value: value, label: value} })
    }

}
