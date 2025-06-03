import { Component, input, Input, InputSignal, output } from '@angular/core';
import { IconSize } from '../icon/enums/icon.enums';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() pizzaTitle = 'Pizza Title';
  @Input() pizzaIngredients: string[] = [''];
  @Input() pizzaPrice = 0;
  @Input() pizzaImgUrl: string | null = null;
  @Input() pizzaTag!: string;
  @Input() pizzaId!: number;

  buttonAddClick = output<void>();

  inCart: InputSignal<boolean> = input(false);

  onToggle() {
    this.buttonAddClick.emit();
  }

  public readonly IconSize = IconSize;
}
