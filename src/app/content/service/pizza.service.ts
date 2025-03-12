import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../pizza.model';
import { filterOptions } from '../../ui/radio/radio.interface';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  // Мы должны применить существующий класс из библиотеки rxjs для сохранения текущих данных
  // Создаём публичный объект

  public categoryData = new BehaviorSubject<string>('All'); // rxjs потребует первоначальное значение 
  // Была мысль передавать в инициализируемое зачение то, что находится в компоненте фильтрации, где в массиве есть поле active true

  // Теперь мы имеем объект которым можем оперировать для сохранения данных о фильтрации
  // this.nameRXJS.subscrive будет подписывать участника(наш компонент) на получение данных
  // Но есть предложение создать переменную по которой компоненты смогут подписываться на обновления

  // Видимо под такое выделяют отдельный синтаксис прописывая в конце доллар как в php
  category$ = this.categoryData.asObservable(); // Применяя переменную, мы пользуемся нашим созданным сервисом(если подключим к компоненту сервис в конструктор)

  // Создаём метод сервиса, который будет обновлять данные и уведомлять всех подписчиков которые подписались на обновления
  setCategory(dataCategory: string) { // Получает строку
    this.categoryData.next(dataCategory) // Устанавливает новым значением полученную строку
  }

  public mockPizzas = [
    {
      id: 1,
      type: 'All',
      title: 'Margherita',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Basil'],
      price: 8.99,
      imgUrl: 'assets/images/pizza-1.png',
      tag: 'top',
      thickness: 'thin' // Случайное значение
    },
    {
      id: 2,
      type: 'Meat',
      title: 'Pepperoni',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
      price: 10.99,
      imgUrl: 'assets/images/pizza-2.png',
      tag: 'none',
      thickness: 'standard' // Случайное значение
    },
    {
      id: 3,
      type: 'Spicy',
      title: 'Diavola',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Spicy salami', 'Chili flakes'],
      price: 11.99,
      imgUrl: 'assets/images/pizza-3.png',
      tag: 'top',
      thickness: 'thin' // Случайное значение
    },
    {
      id: 4,
      type: 'Vegetarian',
      title: 'Four Cheese',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Parmesan', 'Gorgonzola', 'Ricotta'],
      price: 12.99,
      imgUrl: 'assets/images/pizza-4.png',
      tag: 'new',
      thickness: 'standard' // Случайное значение
    },
    {
      id: 5,
      type: 'Meat',
      title: 'Meat Feast',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Sausage', 'Bacon'],
      price: 13.99,
      imgUrl: 'assets/images/pizza-5.png',
      tag: 'none',
      thickness: 'thin' // Случайное значение
    },
    {
      id: 6,
      type: 'Spicy',
      title: 'Inferno',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Jalapeños', 'Spicy sausage', 'Chili oil'],
      price: 14.99,
      imgUrl: 'assets/images/pizza-6.png',
      tag: 'top',
      thickness: 'standard' // Случайное значение
    },
    {
      id: 7,
      type: 'Sweet',
      title: 'Hawaiian',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Pineapple'],
      price: 9.99,
      imgUrl: 'assets/images/pizza-7.png',
      tag: 'none',
      thickness: 'thin' // Случайное значение
    },
    {
      id: 8,
      type: 'With Chicken',
      title: 'Chicken BBQ',
      ingredients: ['BBQ sauce', 'Mozzarella', 'Grilled chicken', 'Red onions', 'Coriander'],
      price: 13.49,
      imgUrl: 'assets/images/pizza-8.png',
      tag: 'new',
      thickness: 'standard' // Случайное значение
    },
    {
      id: 9,
      type: 'Spicy',
      title: 'Mexicana',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ground beef', 'Jalapeños', 'Corn'],
      price: 12.49,
      imgUrl: 'assets/images/pizza-9.png',
      tag: 'none',
      thickness: 'thin' // Случайное значение
    }
  ];

  public doughFiltrationConfig: filterOptions[] = [
    { value: 'standard', label: 'thickness1' },
    { value: 'thin', label: 'thickness2' }
  ]

  public obsPizzas = new BehaviorSubject<Pizza[]>(this.mockPizzas.filter(pizza => pizza.thickness === this.doughFiltrationConfig[0].value))
  pizzas$ = this.obsPizzas.asObservable();

  setFilteredPizzas(pizzas: Pizza[]) {
    this.obsPizzas.next(pizzas)
  }

  getFilteredPizzas(): Pizza[] {
    return this.obsPizzas.getValue()
  }

}
