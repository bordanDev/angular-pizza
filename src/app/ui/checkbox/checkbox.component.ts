import {Component, EventEmitter, input, output, Output, signal} from '@angular/core';
import {CheckboxInterface} from "./checkbox.interface";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  outputData = output<string[]>()
  selectedValues = input<string[]>([])
  options = input.required<CheckboxInterface[]>()
  selectedValuesOut = signal<string[]>([])
  flag = false;

  onCheckboxChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    console.log('Checkbox value:', checked);
  }

  onChange(value: string) {
    this.selectedValuesOut.set([value])
    this.outputData.emit(this.selectedValues())
    this.outputData.subscribe(value => {
      console.log(value)
    })
  }

}
