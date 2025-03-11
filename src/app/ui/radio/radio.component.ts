import { Component, input, Input, output } from '@angular/core';
import { filterOptions } from './radio.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  options = input.required<filterOptions[]>()
  name = input<string>('')
  selectedValue = input<string>('')

  valueChange = output<string>()

  onChange(value: string){
    this.valueChange.emit(value)
  }

}
