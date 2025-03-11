import { Component, HostListener, Input, signal, WritableSignal } from '@angular/core';
import { filterOptions } from '../../ui/radio/radio.interface';

@Component({
  selector: 'app-pizza-filtration',
  templateUrl: './pizza-filtration.component.html',
  styleUrl: './pizza-filtration.component.scss'
})
export class PizzaFiltrationComponent {

  // @Input() public testData!: boolean;

  // getData(value: boolean){
  //   this.testData = value
  // }

  // outputDataFromInput!: string;

  // getDataFromInput(value: string){
  //   this.outputDataFromInput = value
  // }

  filterOptions: WritableSignal<filterOptions[]> = signal([{value: 'standard', label: 'thickness1'}, {value: 'thin', label: 'thickness2'}])

}
