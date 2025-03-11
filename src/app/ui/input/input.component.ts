import { Component, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() public iconPosition: 'left' | 'right' | 'none' = 'none'
  @Input() public inputType: 'default' | 'filter' = 'default'
  @Input() public functionalIconButton: boolean = false
  @Input() public type = 'text'
  @Input() public label = ''
  @Input() public name = ''
  @Input() public placeholder: string = ''
  @Input() public value = ''
  @Input() public inputActive: boolean = false;

  @Output() public valueChange = new EventEmitter<string>();
  public control = new FormControl('')

  @ViewChild("inputField") inputField: any;
  // #inputField - устанавливая в атрибут тега получаем возможность связываться и получать дату от элемента
  @ViewChild("input") input: any;

  constructor(private renderer: Renderer2) { // Renderer 2 - обходной класс созданный для создания кастомных UI решений
    // this.renderer.listen('window', 'click', (e: Event) => {
    //   if (e.target == this.input.nativeElement || e.target == this.inputField.nativeElement) {
    //     this.inputActive = true;
    //     this.inputField.nativeElement.focus();
    //   } else {
    //     this.inputActive = false;
    //     this.inputField.nativeElement.blur();
    //   }
    // });

    this.control.valueChanges.subscribe(value => {
      this.valueChange.emit(value!);
    });
  }
}
