import {Component, EventEmitter, input, OnChanges, OnInit, output, Output, signal} from '@angular/core';
import {CheckboxInterface} from "./checkbox.interface";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnInit {

  selectedValues = input<string[]>([])
  options = input.required<CheckboxInterface[]>()
  selectedValuesChange = output<string[]>()


  selectedValuesLocal: string[] = []

  constructor() {}

  ngOnInit(){
    this.selectedValuesLocal = this.selectedValues();
  }

  isSelected(value: string): boolean{
    // console.log('isSelected works', value)
    return this.selectedValuesLocal.includes(value)
  }

  onCheckboxChange = ( option: { value: string }, event: Event) => {
    let element = event.target as HTMLInputElement;
    element.checked = !element.checked

    this.isSelected(option.value) ? this.selectedValuesLocal = this.selectedValuesLocal.filter(x => x !== option.value) : this.selectedValuesLocal.push(option.value)
    this.selectedValuesChange.emit(this.selectedValuesLocal);

    console.log(this.selectedValuesLocal  )
  }

  toggleList(){
    this.toggleListFlag = !this.toggleListFlag
  }

  toggleListFlag = false;

}
