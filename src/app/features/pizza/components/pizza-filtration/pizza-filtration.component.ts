import {Component, effect, signal, WritableSignal} from '@angular/core';
import { RadioOptions } from '../../../../ui';
import { Interval } from "../../enums/filtration.interface";
import { PizzaService } from '../../services/pizza.service';
import { CheckboxInterface } from "../../../../ui/checkbox/checkbox.interface";

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss',
})
export class PizzaFiltrationComponent{

  constructor(private pizzaService: PizzaService) {

    // set up UI tags
    effect(() => {
        this.pizzaService.pizzaTags$.subscribe(tags => {
          this.cfgTags.set(tags)
        })
    }, {allowSignalWrites: true})

    // set up UI type of dough
    effect(
      () => {
      this.pizzaService.doughTypes$.subscribe(values => {
        this.filterOptions.set(values);
      });
    },
      {allowSignalWrites: true});


    // set up UI price interval
    effect(
      () => {
      this.pizzaService.interval$.subscribe(value => {
        this.selectedInterval.set(value);
        this.pizzaService.setFilteredPricePizzas(value)
      })
    },
      {allowSignalWrites: true});


    // set up UI ingredients

    effect(() => {
      this.pizzaService.checkboxesIngreds$.subscribe(values => {
        this.cfgIngred.set(values)
        // console.log(values.map(x => x.value))
      })
    }, {allowSignalWrites: true});
  }

  cfgTags: WritableSignal<CheckboxInterface[]> = signal([])
  selectedTags: WritableSignal<string[]> = signal([])
  cfgIngred: WritableSignal<CheckboxInterface[]> = signal([])

  countOfAllPizza(){
    return this.pizzaService.filteredPizza()
  }

  localTags: string[] = [];
  localIngred: string[] = [];

  controlFilterLength(){
    if(!this.localTags.length && !this.localIngred.length) {
      this.pizzaService.pizzas$.subscribe((pizzas) => {
        this.pizzaService.filteredPizza.set(pizzas)
      })
    }
  }

  setTags(tags: string[]){
    console.log(tags, 'SET TAGS')
    this.localTags = tags;
    this.controlFilterLength()
    if(this.localTags.length) {
      console.log('localTags LENGTH')
      this.pizzaService.setPizzaTags(tags)
    }
  }

  setIngredients(ingredients: string[]) {
    console.log(ingredients, 'SET INGRED')
    this.localIngred = ingredients;
    this.controlFilterLength()
    if(this.localIngred.length) {
      console.log('localIngred LENGTH')
      this.pizzaService.setPizzaIngredients(ingredients)
    }
  }

  selectedInterval: WritableSignal<Interval[]> = signal([])

  outMinData(value: string){
    this.pizzaService.setMinInterval(Number(value))
    this.pizzaService.setFilteredPricePizzas(this.pizzaService.changedInterval())
  }

  outMaxData(value: string){
    this.pizzaService.setMaxInterval(Number(value))
    this.pizzaService.setFilteredPricePizzas(this.pizzaService.changedInterval())
  }

  setThickness(thickness: string){
    this.pizzaService.setFilteredThicknessPizzas(thickness)
  }

  selectedFilter = signal('')
  filterOptions: WritableSignal<RadioOptions[]> = signal([])

  public onFilterChange(value: string) {
    this.selectedFilter.set(value);
    this.setThickness(value)
  }

}
