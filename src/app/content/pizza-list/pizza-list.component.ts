import { Component, OnDestroy, OnInit } from '@angular/core';
import { PizzaService } from '../service/pizza.service';
import { Pizza } from '../pizza.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit, OnDestroy {


  constructor(private pizzaService: PizzaService) {

  }


  ngOnInit(): void {
    this.subscription = this.pizzaService.category$.subscribe(getCategory => {
      this.pizzaFilter(getCategory);
    }) // Выходное значение метода subscribe это то, что находится в сервисе
    // Внутри скобок указываем переменную, значени е которой поместим в выполнение будущей функции которая будет определять нужный тип пицц
  }


  // Есть что-то, что получает данные с группы кнопок
  // Её задача отдать string выбранной кнопки на компонент list
  // Как только List принимает значение, срабатывает алгоритм отображения пицц по полученной string



  // Создаём массив для хранения отфильтрованных пицц
  public filteredPizza: Pizza[] = [];
  // Создаём объект rxjs для подписки на сервис и получения данных
  private subscription!: Subscription;



  public itemPage(index: number) {
    console.log('Pizza with ' + index + ' ID was clicked')
  }

  // Массив временных данных
  public mockPizzas = [
    {
      id: 1,
      type: 'All',
      title: 'Margherita',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Basil'],
      price: 8.99,
      imgUrl: 'assets/images/pizza-1.png',
      tag: 'top'
    },
    {
      id: 2,
      type: 'Meat',
      title: 'Pepperoni',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
      price: 10.99,
      imgUrl: 'assets/images/pizza-2.png',
      tag: 'none'
    },
    {
      id: 3,
      type: 'Spicy',
      title: 'Diavola',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Spicy salami', 'Chili flakes'],
      price: 11.99,
      imgUrl: 'assets/images/pizza-3.png',
      tag: 'top'
    },
    {
      id: 4,
      type: 'Vegetarian',
      title: 'Four Cheese',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Parmesan', 'Gorgonzola', 'Ricotta'],
      price: 12.99,
      imgUrl: 'assets/images/pizza-4.png',
      tag: 'new'
    },
    {
      id: 5,
      type: 'Meat',
      title: 'Meat Feast',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Sausage', 'Bacon'],
      price: 13.99,
      imgUrl: 'assets/images/pizza-5.png',
      tag: 'none'
    },
    {
      id: 6,
      type: 'Spicy',
      title: 'Inferno',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Jalapeños', 'Spicy sausage', 'Chili oil'],
      price: 14.99,
      imgUrl: 'assets/images/pizza-6.png',
      tag: 'top'
    },
    {
      id: 7,
      type: 'Sweet',
      title: 'Hawaiian',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Pineapple'],
      price: 9.99,
      imgUrl: 'assets/images/pizza-7.png',
      tag: 'none'
    },
    {
      id: 8,
      type: 'With Chicken',
      title: 'Chicken BBQ',
      ingredients: ['BBQ sauce', 'Mozzarella', 'Grilled chicken', 'Red onions', 'Coriander'],
      price: 13.49,
      imgUrl: 'assets/images/pizza-8.png',
      tag: 'new'
    },
    {
      id: 9,
      type: 'Spicy',
      title: 'Mexicana',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ground beef', 'Jalapeños', 'Corn'],
      price: 12.49,
      imgUrl: 'assets/images/pizza-9.png',
      tag: 'none'
    },
    {
      id: 10,
      type: 'Vegetarian',
      title: 'Veggie Delight',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Bell peppers', 'Olives', 'Mushrooms', 'Onions'],
      price: 11.99,
      imgUrl: 'assets/images/pizza-10.png',
      tag: 'new'
    }

    // Другие пиццы
  ];



  // В момент инициализации(жизненный цикл приложения) обращаемся к сервису чтобы подписаться на получение данных

  ngOnDestroy(): void { // Избавляемся от подписки
    if (this.subscription) {
      this.subscription.unsubscribe(); // rxjs
    }
  }

  pizzaFilter(typeOfPizza: string) { // Указали что это тип пиццы со строчным значением
    if (typeOfPizza === 'All') {
      this.filteredPizza = this.mockPizzas;
    } else {
      this.filteredPizza = this.mockPizzas.filter(pizza => pizza.type === typeOfPizza)
    }
  }

  // Нужно настроить разметку по этому методу

}
