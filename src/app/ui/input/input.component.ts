import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

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
  @Input() public placeholder: string = ''
  @Input() public value: string = ''
  @Input() public inputActive: boolean = false;

  @ViewChild("inputField") inputField: any;
  @ViewChild("input") input: any;

  @Output() outputData = new EventEmitter<string>()

  sendData(value: string) {
    this.outputData.emit(value)
  }

  private focusListener?: () => void; // Empty function

  constructor(private renderer: Renderer2) { // Renderer 2 - обходной класс созданный для создания кастомных UI решений

  }

  ngAfterViewInit(){
    this.focusListener = this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target == this.input.nativeElement || e.target == this.inputField.nativeElement) {
        this.inputActive = !this.inputActive
        this.inputField.nativeElement.focus();
      } else {
        this.inputActive = !this.inputActive;
        this.inputField.nativeElement.blur();
      }
    });
  }

  ngOnDestroy() {
    this.focusListener?.() // Unsubscribe of 'click' event
  }


}
