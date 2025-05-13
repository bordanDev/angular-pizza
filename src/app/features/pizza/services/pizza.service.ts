import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Pizza } from '../../../shared/interfaces/pizza.interface';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { CheckboxInterface } from "../../../ui/checkbox/checkbox.interface";
import { IngredientsService } from "./ingredients.service";
import { HttpClient } from '@angular/common/http';
import { EndpointsEnum } from '../../../core/enums/endpoints.enum';
import { MockServerEnum } from '../../../core/enums/mock-server.enum';
import { FiltrationUI, Interval } from "../enums/filtration.interface";

@Injectable({
  providedIn: 'root'
})
export class PizzaService{

  private http = inject(HttpClient)

  private pizzasSubject = new BehaviorSubject<Pizza[]>([])
  pizzas$: Observable<Pizza[]> = this.pizzasSubject.asObservable();

  private pizzaTagsSubject: BehaviorSubject<CheckboxInterface[]> = new BehaviorSubject<CheckboxInterface[]>([])
  pizzaTags$: Observable<CheckboxInterface[]> = this.pizzaTagsSubject.asObservable()

  public loadPizza(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(MockServerEnum.MOCK + '/' + EndpointsEnum.PIZZA)
      .pipe(
        tap((pizzas)=> {
          this.pizzasSubject.next(pizzas)
          console.log(pizzas)
          this.initializeDependentData(pizzas) // Load UI Filtration Checkboxes
        })
      )
  }

  public loadUi(): Observable<FiltrationUI> {
    return this.http.get<FiltrationUI>(MockServerEnum.MOCK + '/' + EndpointsEnum.FILTRATION)
      .pipe(
        tap((ui) => {
          this.pizzaTagsSubject.next(ui.tags)
          this.doughTypesSubject.next(ui.typeOfDough)
          this.intervalDataSubject.next(ui.interval)
          console.log(this.intervalDataSubject.getValue())
        })
      )
  }

  private initializeDependentData(pizzas: Pizza[]) {
    const ingredients = IngredientsService.getIngredients(pizzas)
    this.checkboxesIngredsSubject.next(ingredients)
  }

  setPizzaTags(values: string[]){
    console.log(values)
    const allPizza = this.pizzasSubject.getValue()
    const filtered = allPizza.filter(pizza => values.includes(pizza.tag))
    this.filteredPizza.set(filtered)
  }

  private doughTypesSubject: BehaviorSubject<RadioOptions[]> = new BehaviorSubject<RadioOptions[]>([])
  doughTypes$: Observable<RadioOptions[]> = this.doughTypesSubject.asObservable()

  private checkboxesIngredsSubject: BehaviorSubject<CheckboxInterface[]> = new BehaviorSubject<CheckboxInterface[]>([])
  checkboxesIngreds$: Observable<CheckboxInterface[]> = this.checkboxesIngredsSubject.asObservable()

  public setPizzaIngredients(ingredients: string[]){
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.ingredients.some(ing => ingredients.includes(ing)))
    console.log(filtered)
    this.filteredPizza.set(filtered)
  }

  public readonly filteredPizza = signal<Pizza[]>(this.pizzasSubject.getValue())

  public setFilteredThicknessPizzas(thickness: string) {
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.thickness === thickness)
    this.filteredPizza.set(filtered)
    console.log(this.filteredPizza())
  }

  private intervalDataSubject = new BehaviorSubject<Interval[]>([])
  interval$ = this.intervalDataSubject.asObservable()

  changedInterval = signal<Interval[]>([])

  public setFilteredPricePizzas(intervalPrice: Interval[]){
    const allPizzas = this.pizzasSubject.getValue()
    const filtered = allPizzas.filter(pizza => pizza.price <= intervalPrice[0]?.max && pizza.price >= intervalPrice[0]?.min)
    this.filteredPizza.set(filtered)
  }

  public setMinInterval(minValue: number){
    const interval = this.intervalDataSubject.getValue();
    interval[0].min = minValue
    this.changedInterval.set(interval)
  }

  public setMaxInterval(maxValue: number){
    const interval = this.intervalDataSubject.getValue();
    interval[0].max = maxValue
    this.changedInterval.set(interval)
  }
}
