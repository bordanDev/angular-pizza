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
        
        const filtered = ingredientsOfAllPizzas.map((ingredients, index) => {
            ingredients.filter((ingred, ingredIndex) => {
                array[ingredIndex] !== ingred ? array[ingredIndex] = ingred  : ''
            })
        })
            

        console.log(ingredientsOfAllPizzas)
        console.log(array);
    }
    )

    

}