import { Component, Input } from '@angular/core';
import { PizzaAdditionalIngredients } from '../../pizza.model';


@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.scss'
})
export class PizzaPageComponent {

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

  ////////////////////////////////


}
