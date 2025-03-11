import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {

  @Output() outputData = new EventEmitter<boolean>()

  @Output() flag = false;

  toggleCheckbox(){
    this.flag = !this.flag
    this.outputData.emit(this.flag)
  }

}
