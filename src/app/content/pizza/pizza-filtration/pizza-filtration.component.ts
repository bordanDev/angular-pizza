import {Component, effect, signal, WritableSignal} from '@angular/core';
import { RadioOptions } from '../../../ui/radio/radio.interface';
import { Pizza } from '../../pizza.model';
import { PizzaService } from '../pizza-service/pizza.service';
import { OnInit } from '@angular/core'
import {Interval} from "../../../ui/interval/interval.interface";
import {map} from "rxjs";

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss',
})
export class PizzaFiltrationComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {

    effect(() => {
      this.pizzaService.pizzas$.pipe(
      map(pizzas => pizzas.filter(pizza => pizza.thickness === this.selectedFilter()))
      ).subscribe((filtered) => {
        this.filteredPizzas.set(filtered);
      })
    },
      {allowSignalWrites: true} )

    effect(
      () => {
      this.pizzaService.doughTypes$.subscribe(values => {
        this.filterOptions.set(values);
      });
    },
      {allowSignalWrites: true})

  }

  selectedFilter = signal('')
  filteredPizzas: WritableSignal<Pizza[]> = signal([])
  filterOptions: WritableSignal<RadioOptions[]> = signal([])
  selectedInterval: WritableSignal<Interval[]> = signal([])

  public ngOnInit() {
    this.selectedInterval.set(this.pizzaService.getIntervalData())
    console.log(this.selectedInterval())
  }

  public onFilterChange(value: string) {
    this.selectedFilter.set(value);
    console.log(this.filteredPizzas())
  }

}
