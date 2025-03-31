import { Injectable } from "@angular/core";
import { PizzaService } from "./pizza.service";

@Injectable({
    providedIn: 'root'
})
export class Ingredients {
    constructor(public pizzaService: PizzaService){
    }

    ngOnInit(){
        this.ingredients()
        console.log(1)
    }

    ingredients = () => this.pizzaService.pizzas$.subscribe(pizzas => {
        let ingredientsOfAllPizzas = pizzas.map(pizzas => pizzas.ingredients);
        let array: string[] = []

        let firstPizzaIngred = pizzas[0].ingredients
        let secondPizzaIngred = pizzas[1].ingredients
        console.log(firstPizzaIngred)
        console.log(secondPizzaIngred)

        // const filtered = ingredientsOfAllPizzas.map((ingredients, index) => {
        //     // ingredients.filter((ingred, index) => {
        //     //     array[index] !== ingred ? array[index] = ingred  : ''
        //     // })
        //   ingredients.map(x => console.log(x))
        // })

        // const filtered = ingredientsOfAllPizzas.map((ingredients, index) => {
        //   // console.log(ingredients)
        //   let x = ingredients.filter(ingred  => ingred !== ingredients[index])
        //   console.log(x)
        // })


        // console.log(filtered)

        console.log(ingredientsOfAllPizzas)
        console.log(array);
    }
    )



}
