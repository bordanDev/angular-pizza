import { Component, HostListener, Input, signal, WritableSignal } from '@angular/core';
import { filterOptions } from '../../ui/radio/radio.interface';
import { Pizza } from '../pizza.model';
import { PizzaService } from '../service/pizza.service';

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss'
})
export class PizzaFiltrationComponent {

  constructor(private pizzaService: PizzaService) { }

  // @Input() public testData!: boolean;

  // getData(value: boolean){
  //   this.testData = value
  // }

  // outputDataFromInput!: string;

  // getDataFromInput(value: string){
  //   this.outputDataFromInput = value
  // }


  selectedFilter = signal('')
  filteredPizzas: WritableSignal<Pizza[]> = signal([])
  filterOptions: WritableSignal<filterOptions[]> = signal([])

  ngOnInit() {
    this.filterOptions.set(this.pizzaService.doughFiltrationConfig)
    this.selectedFilter.set(this.pizzaService.doughFiltrationConfig[0].value)
  }

  onFilterChange(value: string) {
    this.selectedFilter.set(value);
    this.filteredPizzas.set(this.getThicknessFilteredPizzas(value));
    this.pizzaService.setFilteredPizzas(this.filteredPizzas())
    console.log(this.filteredPizzas())
  }

  getThicknessFilteredPizzas(filter: string) {
    return this.pizzaService.mockPizzas.filter(pizza => pizza.thickness === filter);
  }


}
