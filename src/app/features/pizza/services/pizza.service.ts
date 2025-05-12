import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pizza } from '../../../shared/interfaces/pizza.interface';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Interval } from "../../../ui/interval/interval.interface";
import { CheckboxInterface } from "../../../ui/checkbox/checkbox.interface";
import { IngredientsService } from "./ingredients.service";

@Injectable({
  providedIn: 'root'
})
export class PizzaService{


  getPizzaIngredients(pizzas: Pizza[]){
    return IngredientsService.getIngredients(pizzas)
  }

  // Pizzas
  private readonly mockPizzas = [
    {
      id: 1,
      type: 'All',
      title: 'Margherita',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Basil'],
      price: 8.99,
      imgUrl: 'assets/images/pizza-1.png',
      tag: 'top',
      thickness: 'thin',
      size: 'medium',
      weight: 450,
      additionalIngredients: ['Cheese board', 'Creamy mozzarella']
    },
    {
      id: 2,
      type: 'Meat',
      title: 'Pepperoni',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Pepperoni'],
      price: 10.99,
      imgUrl: 'assets/images/pizza-2.png',
      tag: 'none',
      thickness: 'standard',
      size: 'large',
      weight: 550,
      additionalIngredients: ['Cheddar and Parmesan', 'Creamy mozzarella']
    },
    {
      id: 3,
      type: 'Spicy',
      title: 'Diavola',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Spicy salami', 'Chili flakes'],
      price: 11.99,
      imgUrl: 'assets/images/pizza-3.png',
      tag: 'top',
      thickness: 'thin',
      size: 'medium',
      weight: 500,
      additionalIngredients: ['Cheddar and Parmesan', 'Creamy mozzarella']
    },
    {
      id: 4,
      type: 'Vegetarian',
      title: 'Four Cheese',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Parmesan', 'Gorgonzola', 'Ricotta'],
      price: 12.99,
      imgUrl: 'assets/images/pizza-4.png',
      tag: 'new',
      thickness: 'standard',
      size: 'large',
      weight: 600,
      additionalIngredients: ['Cheese board']
    },
    {
      id: 5,
      type: 'Meat',
      title: 'Meat Feast',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Sausage', 'Bacon'],
      price: 13.99,
      imgUrl: 'assets/images/pizza-5.png',
      tag: 'none',
      thickness: 'thin',
      size: 'large',
      weight: 630,
      additionalIngredients: ['Cheddar and Parmesan', 'Tender chicken']
    },
    {
      id: 6,
      type: 'Spicy',
      title: 'Inferno',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Jalapeños', 'Spicy sausage', 'Chili oil'],
      price: 14.99,
      imgUrl: 'assets/images/pizza-6.png',
      tag: 'top',
      thickness: 'standard',
      size: 'large',
      weight: 640,
      additionalIngredients: ['Creamy mozzarella', 'Tender chicken']
    },
    {
      id: 7,
      type: 'Sweet',
      title: 'Hawaiian',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ham', 'Pineapple'],
      price: 9.99,
      imgUrl: 'assets/images/pizza-7.png',
      tag: 'none',
      thickness: 'thin',
      size: 'medium',
      weight: 470,
      additionalIngredients: ['Cheese board', 'Tender chicken']
    },
    {
      id: 8,
      type: 'With Chicken',
      title: 'Chicken BBQ',
      ingredients: ['BBQ sauce', 'Mozzarella', 'Grilled chicken', 'Red onions', 'Coriander'],
      price: 13.49,
      imgUrl: 'assets/images/pizza-8.png',
      tag: 'new',
      thickness: 'standard',
      size: 'large',
      weight: 610,
      additionalIngredients: ['Cheddar and Parmesan']
    },
    {
      id: 9,
      type: 'Spicy',
      title: 'Mexicana',
      ingredients: ['Tomato sauce', 'Mozzarella', 'Ground beef', 'Jalapeños', 'Corn'],
      price: 12.49,
      imgUrl: 'assets/images/pizza-9.png',
      tag: 'none',
      thickness: 'thin',
      size: 'medium',
      weight: 520,
      additionalIngredients: ['Creamy mozzarella', 'Tender chicken']
    }
  ];


  // private readonly pizzaTags

  private readonly pizzaTags: CheckboxInterface[] = [
    { value: 'top' , label: 'top'},
    { value: 'new' , label: 'new'}
  ]

  private pizzaTagsSubject: BehaviorSubject<CheckboxInterface[]> = new BehaviorSubject<CheckboxInterface[]>(this.pizzaTags)
  pizzaTags$: Observable<CheckboxInterface[]> = this.pizzaTagsSubject.asObservable()

  setPizzaTags(values: string[]){
    console.log(values)
    const allPizza = this.pizzasSubject.getValue()
    const filtered = allPizza.filter(pizza => values.includes(pizza.tag))
    this.filteredPizza.set(filtered)
    console.log(this.filteredPizza())
  }

  // UI cfg
  private readonly doughFiltrationConfig: RadioOptions[] = [
    { value: 'standard', label: 'thickness1' },
    { value: 'thin', label: 'thickness2' }
  ]
  private readonly intervalConfig: Interval[] = [ { minValue: 0, maxValue: 15 } ]
  private readonly checkboxesList: CheckboxInterface[] = this.getPizzaIngredients(this.mockPizzas);

  private checkboxesIngredsSubject: BehaviorSubject<CheckboxInterface[]> = new BehaviorSubject<CheckboxInterface[]>(this.checkboxesList)
  checkboxesIngreds$: Observable<CheckboxInterface[]> = this.checkboxesIngredsSubject.asObservable()

  public setCheckboxes(ingredients: string[]){
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.ingredients.some(ing => ingredients.includes(ing)))
    console.log(filtered)
    this.filteredPizza.set(filtered)
  }

  private doughTypesSubject: BehaviorSubject<RadioOptions[]> = new BehaviorSubject<RadioOptions[]>(this.doughFiltrationConfig)
  doughTypes$: Observable<RadioOptions[]> = this.doughTypesSubject.asObservable()

  private pizzasSubject = new BehaviorSubject<Pizza[]>(this.mockPizzas)
  pizzas$: Observable<Pizza[]> = this.pizzasSubject.asObservable();

  public readonly filteredPizza = signal<Pizza[]>(this.mockPizzas)

  public setFilteredThicknessPizzas(thickness: string) {
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.thickness === thickness)
    this.filteredPizza.set(filtered)
    console.log(this.filteredPizza())
  }

  private intervalData = new BehaviorSubject<Interval[]>(this.intervalConfig)
  interval$ = this.intervalData.asObservable()

  changedInterval = signal<Interval[]>(this.intervalConfig)

  public setFilteredPricePizzas(intervalPrice: Interval[]){
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.price <= intervalPrice[0]?.maxValue && pizza.price >= intervalPrice[0]?.minValue)
    this.filteredPizza.set(filtered)
  }

  public setMinInterval(minValue: number){
    const interval = this.intervalConfig;
    interval[0].minValue = minValue
    this.changedInterval.set(interval)
  }

  public setMaxInterval(maxValue: number){
    const interval = this.intervalConfig;
    interval[0].maxValue = maxValue
    this.changedInterval.set(interval)
  }
}
