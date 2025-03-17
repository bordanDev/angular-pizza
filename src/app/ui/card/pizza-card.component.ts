import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {

  @Input() pizzaTitle: string = 'Pizza Title';

  @Input() pizzaIngredients: string[] = ['']

  @Input() pizzaPrice: number = 0;

  @Input() pizzaImgUrl: string | null = null;

  // @Input() pizzaTag: 'top' | 'new' | 'none' = 'top'

  @Input() pizzaTag!: string;

}
