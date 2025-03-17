import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Pizza } from '../../pizza.model';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Interval } from "../../../ui/interval/interval.interface";

@Injectable({
  providedIn: 'root'
})
export class PizzaService{

  private readonly mockPizzas = [
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
  private doughFiltrationConfig: RadioOptions[] = [
    { value: 'standard', label: 'thickness1' },
    { value: 'thin', label: 'thickness2' }
  ]
  private intervalConfig: Interval[] = [ { minValue: 0, maxValue: undefined } ]

  private intervalData: BehaviorSubject<Interval[]> = new BehaviorSubject<Interval[]>(this.intervalConfig)
  interval$: Observable<Interval[]> = this.intervalData.asObservable();

  setIntervalData(value: Interval[]) {
    this.intervalData.next(value)
  }
  getIntervalData() {
    return this.intervalData.getValue()
  }

  private categoryData = new BehaviorSubject<string>('All'); // rxjs потребует первоначальное значение
  category$ = this.categoryData.asObservable(); // Применяя переменную, мы пользуемся нашим созданным сервисом(если подключим к компоненту сервис в конструктор)

  setCategory(dataCategory: string) {
    this.categoryData.next(dataCategory)
  }
  getCategory() {
    return this.categoryData.getValue()
  }

  constructor() {
    // console.log(this.getCategory())
  }

  private doughTypesSubject: BehaviorSubject<RadioOptions[]> = new BehaviorSubject<RadioOptions[]>(this.doughFiltrationConfig)
  doughTypes$: Observable<RadioOptions[]> = this.doughTypesSubject.asObservable()

  /////////////////////////////////
  /////////////////////////////////
  private pizzasSubject = new BehaviorSubject<Pizza[]>(this.mockPizzas)
  pizzas$: Observable<Pizza[]> = this.pizzasSubject.asObservable();

  setPizzas(pizzas: Pizza[]) {
    this.pizzasSubject.next(pizzas)
  }
  getPizzas(): Pizza[] {
    return this.pizzasSubject.getValue()
  }

}
