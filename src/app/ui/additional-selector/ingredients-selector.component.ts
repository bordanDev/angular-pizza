import {
  Component,
  EventEmitter,
  input,
  InputSignal,
  OnInit,
  Output,
} from '@angular/core';
import { PizzaAdditionalIngredient } from '../../features/pizza/interfaces/pizza-additional-ingridients.interface';

@Component({
  selector: 'app-additional-selector',
  templateUrl: './ingredients-selector.component.html',
  styleUrl: './ingredients-selector.component.scss',
})
export class IngredientsSelectorComponent implements OnInit {
  // We're use the type that receive AdditionalIngredientsEnum
  ingredients: InputSignal<PizzaAdditionalIngredient[]> = input.required();
  @Output() activatedSelector = new EventEmitter<PizzaAdditionalIngredient[]>(); // Отдаём на внешние компоненты данные об активированных кнопках

  selectorState: PizzaAdditionalIngredient[] = [];

  ngOnInit() {
    console.log('asd');
  }

  setActive(item: PizzaAdditionalIngredient) {
    if (this.selectorState.includes(item)) {
      this.selectorState = this.selectorState.filter((x) => x !== item);
      console.log(this.selectorState, 'INCLUDES');
    } else {
      this.selectorState = [...this.selectorState, item];
      console.log(this.selectorState, 'NOT INCLUDES');
    }
    this.emitSelectedIngredients(this.selectorState);
  }

  private emitSelectedIngredients(items: PizzaAdditionalIngredient[]) {
    console.log(items);
    this.activatedSelector.emit(items);
  }
}
