import {Component, effect, signal, WritableSignal} from '@angular/core';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Pizza } from '../../pizza.model';
import { PizzaService } from '../pizza-service/pizza.service';
import {Interval} from "../../../ui/interval/interval.interface";

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
        this.selectedInterval.set(value)
      })
    },
      {allowSignalWrites: true});

  }

  outMinData(value: string){
    console.log(value)
  }

  outMaxData(value: string){
    console.log(value)
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
