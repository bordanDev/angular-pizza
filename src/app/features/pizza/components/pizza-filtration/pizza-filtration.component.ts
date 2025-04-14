import {Component, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { RadioOptions, Interval } from '../../../../ui';
import { PizzaService } from '../../services/pizza.service';
import { CheckboxInterface } from "../../../../ui/checkbox/checkbox.interface";

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss',
})
export class PizzaFiltrationComponent implements OnInit {

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

  ngOnInit() {

  }

  countOfAllPizza(){
    return this.pizzaService.filteredPizza()
  }

  setTags(tags: string[]){
    console.log(tags)
    this.pizzaService.setPizzaTags(tags)
  }

  setIngredients(ingredients: string[]) {
    // console.log(ingredients)
    this.pizzaService.setCheckboxes(ingredients)
    // console.log('FCW')
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
