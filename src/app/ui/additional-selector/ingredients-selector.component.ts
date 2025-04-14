import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PizzaAdditionalIngredients } from '../../shared/interfaces/pizza.interface';

@Component({
  selector: 'app-additional-selector',
  templateUrl: './ingredients-selector.component.html',
  styleUrl: './ingredients-selector.component.scss'
})
export class IngredientsSelectorComponent {

  @Input() ingredients: PizzaAdditionalIngredients[] = [];


  indexActive: number | undefined = undefined

  setActive(index: number) {
    this.ingredients[index].state = !this.ingredients[index].state
    this.emitSelectedIngredients()
  }

  @Output() activatedSelector = new EventEmitter<PizzaAdditionalIngredients[]> // Отдаём на внешние компоненты данные об активированных кнопках

  private emitSelectedIngredients() {
    // const selected = this.ingredients.filter(ingredient => ingredient.state).map(ingredient => ingredient.title) // Выдаёт title только активных кнопок
    const selected = this.ingredients.filter(ingredient => ingredient.state)
    this.activatedSelector.emit(selected)
  }

}
