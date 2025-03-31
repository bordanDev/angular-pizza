import {Component, EventEmitter, input, OnChanges, OnInit, output, Output, signal} from '@angular/core';
import {CheckboxInterface} from "./checkbox.interface";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnChanges, OnInit {

  selectedValues = input<string[]>([])
  options = input.required<CheckboxInterface[]>()
  selectedValuesChange = output<string[]>()


  selectedValuesLocal: string[] = []

  constructor() {
  }

  ngOnInit(){
    console.log(this.selectedValuesLocal)
    this.selectedValuesLocal = this.selectedValues();
    console.log(this.selectedValuesLocal)

  }

  ngOnChanges() {
    // Синхронизируем локальное состояние при изменении `@Input()`
  }

  isSelected(value: string): boolean{
    // console.log('isSelected works', value)
    return this.selectedValuesLocal.includes(value)
  }

  onCheckboxChange = ( option: { value: string }, event: Event) => {
    let updatedSelection = [...this.selectedValuesLocal];

    let element = event.target as HTMLInputElement;
    element.checked = !element.checked

    if(this.isSelected(option.value)){
      updatedSelection = updatedSelection.filter(v => console.log(v !== option.value));
      console.log('deleting')
    } else {
      updatedSelection.push(option.value)
      console.log('pushing value')
    }

    this.selectedValuesChange.emit(updatedSelection);

    console.log(updatedSelection)
  };

}
