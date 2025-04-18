import { Component, Input } from '@angular/core';
import { IconSize } from "../icon/enums/icon.enums";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() pizzaTitle: string = 'Pizza Title';

  @Input() pizzaIngredients: string[] = ['']

  @Input() pizzaPrice: number = 0;

  @Input() pizzaImgUrl: string | null = null;

  // @Input() pizzaTag: 'top' | 'new' | 'none' = 'top'

  @Input() pizzaTag!: string;

  public readonly IconSize = IconSize;
}
