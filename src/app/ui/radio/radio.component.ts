import { Component, input, output } from '@angular/core';
import { RadioOptions } from './radio.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  options = input.required<RadioOptions[]>()
  name = input<string>('')
  selectedValue = input<string>('')

  valueChange = output<string>()

  onChange(value: string) {
    this.valueChange.emit(value)
  }

}
