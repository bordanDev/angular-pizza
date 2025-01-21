import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {

  @Input() items: string[] = []; // Массив строк наших кнопок

  @Output() activeChange = new EventEmitter<number>(); // Вывод активного элемента

  activeIndex = 0;

  setActive(index: number): void {
    this.activeIndex = index; // Устанавливаем флаг в значение нажатой кнопки
    this.activeChange.emit(this.activeIndex) // Передаём на родителя флаг
  }

}
