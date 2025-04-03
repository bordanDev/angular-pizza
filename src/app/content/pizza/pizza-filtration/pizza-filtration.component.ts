import {Component, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Pizza } from '../../pizza.model';
import { PizzaService } from '../pizza-services/pizza.service';
import {Interval} from "../../../ui/interval/interval.interface";
import { interval, take } from 'rxjs';
import {CheckboxInterface} from "../../../ui/checkbox/checkbox.interface";

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss',
})
export class PizzaFiltrationComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {

    // set up UI radio
    effect(
      () => {
      this.pizzaService.doughTypes$.subscribe(values => {
        this.filterOptions.set(values);
      });
    },
      {allowSignalWrites: true});


    // set up UI interval
    effect(
      () => {
      this.pizzaService.interval$.subscribe(value => {
        this.selectedInterval.set(value);
        this.pizzaService.setFilteredPricePizzas(value)
      })
    },
      {allowSignalWrites: true});


    // set up UI checkboxes

    effect(() => {
      this.pizzaService.checkboxesIngreds$.subscribe(values => {
        this.availableCheckboxes.set(values)
        console.log(values.map(x => x.value))
        this.selectedCheckboxes.set(values.map(x => x.value))
      })
    }, {allowSignalWrites: true})
  }

  availableCheckboxes: WritableSignal<CheckboxInterface[]> = signal([])
  selectedCheckboxes: WritableSignal<string[]> = signal([])

  ngOnInit() {

  }

  setIngredients(ingredients: string[]) {
    console.log(ingredients)
    this.pizzaService.setCheckboxes(ingredients)
    console.log('FCW')
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
