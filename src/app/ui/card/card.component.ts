import { Component, input, Input, InputSignal, output, Output } from '@angular/core';
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

  @Input() pizzaId!: number;

  toggle = output<void>()

  inCart: InputSignal<boolean> = input(false);

  onToggle(){
    this.toggle.emit()
  }

  public readonly IconSize = IconSize;
}
