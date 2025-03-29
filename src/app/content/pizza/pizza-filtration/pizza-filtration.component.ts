import {Component, effect, signal, WritableSignal} from '@angular/core';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Pizza } from '../../pizza.model';
import { PizzaService } from '../pizza-services/pizza.service';
import {Interval} from "../../../ui/interval/interval.interface";
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss',
})
export class PizzaFiltrationComponent {

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

  }

  test(value: string[]){
    console.log(value);
  }

  outMinData(value: string){
    this.pizzaService.setMinInterval(Number(value))
    this.pizzaService.setFilteredPricePizzas(this.pizzaService.changedInterval())
    // console.log(value)
    console.log(this.pizzaService.changedInterval())
  }

  outMaxData(value: string){
    this.pizzaService.setMaxInterval(Number(value))
    this.pizzaService.setFilteredPricePizzas(this.pizzaService.changedInterval())
    // console.log(value)
    console.log(this.pizzaService.changedInterval())
  }

  setThickness(thickness: string){
    this.pizzaService.setFilteredThicknessPizzas(thickness)
  }

  selectedFilter = signal('')
  filteredPizzas: WritableSignal<Pizza[]> = signal([])
  filterOptions: WritableSignal<RadioOptions[]> = signal([])

  selectedInterval: WritableSignal<Interval[]> = signal([])


  public onFilterChange(value: string) {
    this.selectedFilter.set(value);
    this.setThickness(value)
  }

}
