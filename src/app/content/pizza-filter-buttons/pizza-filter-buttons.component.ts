import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-pizza-filter-buttons',
  templateUrl: './pizza-filter-buttons.component.html',
  styleUrls: ['./pizza-filter-buttons.component.scss']
})
export class PizzaFilterButtonsComponent {

  public filterButtonsTexts = [
    { text: 'All', active: true, dropdown: false },
    { text: 'Meat', active: false, dropdown: false },
    { text: 'Spicy', active: false, dropdown: false },
    { text: 'Sweet', active: false, dropdown: false },
    { text: 'Vegetarian', active: false, dropdown: false },
    { text: 'With Chicken', active: false, dropdown: false },
    { text: 'More', active: false, dropdown: true }
  ];


  // пишем переменную которая будет хранить данные на вывод во внешний алгоритм компонента
  @Output() categorySelected = new EventEmitter<string>(); // применяем существующий класс в Angular для передачи указывая тип данных

  setActiveButton(index: number, text: string): void {
    // Сбрасываем состояние всех кнопок
    this.filterButtonsTexts.forEach(button => button.active = false);
    // Активируем выбранную кнопку
    const selectedButton = this.filterButtonsTexts[index];
    selectedButton.active = true;

    // После установки в TRUE нужно выполнять внешний метод который передаст string с полем text в сервис
    this.categorySelected.emit(text);
  }


}
