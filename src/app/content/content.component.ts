import { Component } from '@angular/core';
import { Ingredients } from './pizza/pizza-services/ingredients.service';
import { PizzaService } from './pizza/pizza-services/pizza.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',

})
export class ContentComponent { //// implements нужен для утверждения приложению, что мы точно реализуем OnInit внутри класса
  // Здесь мы должны передать наше событие в дочерний компонент пицц

  pizzas$: any;

  constructor(private pizzaService: PizzaService, private ingredients: Ingredients) {
    // Объявили в конструкторе сервис
    ingredients.ingredients()
  }

  pages = ['Pizza']

  ngOnInit() {
    // if (this.afs) {
    //   this.pizzas$ = this.afs.collection('pizzas').valueChanges(); // Как говорит чувак, оно проверяет изменение в получаемом значении // Хз
    // } else {

    // }
  }

  // Создадим метод для передачи выбранного типа пиццы
  // onCategorySelected(category: string): void {
  //   this.pizzaService.setCategory(category)
  // }

  //



}


// Кнопки фильтраций и вывод в Output() +
// Алгоритм приёма пицц на основе полученных данных из общего сервиса +
