import { Component, inject, OnInit } from '@angular/core';
import { Pizza, PizzaAdditionalIngredients } from '../../shared/interfaces/pizza.interface';
import { PizzaService } from "../../features/pizza/services/pizza.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.scss'
})
export class PizzaPageComponent implements OnInit {

  pizzaService = inject(PizzaService)
  routerActive = inject(ActivatedRoute)

  pizzaPageId!: string;
  pizzaArray: Pizza[] = [];
  currentPizza!: Pizza;

  ngOnInit(){
    this.pizzaService.pizzas$.subscribe(pizzas => this.pizzaArray = pizzas)
    this.routerActive.url.subscribe(x => this.pizzaPageId = x[x.length - 1].path)
    const pizzaResult = () => {
      const pizzas = this.pizzaArray.filter(x => x.id.toString() === this.pizzaPageId);
      this.currentPizza = pizzas[0];
      console.log(this.currentPizza, 'PIZZA RESULT')
    }

    pizzaResult()
  }

  testIngredients: PizzaAdditionalIngredients[] = [
    {
      title: 'Cheese board',
      imgUrl: 'assets/images/ingredient-1.png',
      price: 4.99,
      state: false
    },
    {
      title: 'Creamy mozzarella',
      imgUrl: 'assets/images/ingredient-2.png',
      price: 0.99,
      state: false
    },
    {
      title: 'Cheddar and Parmesan',
      imgUrl: 'assets/images/ingredient-3.png',
      price: 0.99,
      state: false
    },
    {
      title: 'Tender chicken',
      imgUrl: 'assets/images/ingredient-4.png',
      price: 0.99,
      state: false
    }
  ]

  selectedIngredients: PizzaAdditionalIngredients[] = [];

  totalPrice = 12.99

  onSelectedIngredientsChanged(selected: PizzaAdditionalIngredients[]) {
    this.selectedIngredients = selected
    // this.pizzaStaticPrice += selected.map(ingridient => ingridient.price).reduce((accumulator, current) => accumulator + current)
    this.totalPrice = selected.reduce((sum, ingredient) => sum + ingredient.price, 12.99) // Суммирует с возможностью перезаписывать ранее выбранные значения
    console.log('Выбранные ингредиенты:', selected)
  }


  ///////////////////////////////////////////
  // Передача активного значения свитчера на внешний компонент

  pizzaSizeArray: string[] = ['Small', 'Middle', 'Big']

  pizzaThicknessArray: string[] = ['Standard', 'Tint']

  activePizzaSize = 'Small' // Хранящяя переменная

  activePizzaThickness = 'Standard' // Хранящяя переменная

  onSwitchSize(index: number) {
    this.activePizzaSize = this.pizzaSizeArray[index]
  }

  onSwitchThickness(index: number) {
    this.activePizzaThickness = this.pizzaThicknessArray[index]
  }

}
