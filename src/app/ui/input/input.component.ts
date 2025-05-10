import {
  AfterViewInit,
  Component,
  EventEmitter, forwardRef,
  Input, OnDestroy, OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() public iconPosition: 'left' | 'right' | 'none' = 'none'
  @Input() public inputType: 'default' | 'filter' = 'default'
  @Input() public placeholder = ''
  @Input() public value = ''
  @Input() public inputActive = false;
  @Input() public isFilled = false;

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  @ViewChild("inputField") inputField: any;
  @ViewChild("input") input: any;

  @Output() outputData = new EventEmitter<string>()
  @Output() inputActiveData = new EventEmitter<boolean>()

  private inputSubject = new Subject<string>()
  private destroy$ = new Subject<void>()

  ngOnInit(){
    this.inputSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(), // Игнорирует если не поступило нового значения
      takeUntil(this.destroy$) // Отписка после уничтожения comp
    ).subscribe(value => {
        this.sendData(value)
    })
  }

  onInputChange(e: Event){
    const value = (e.target as HTMLInputElement).value
    this.inputSubject.next(value)
  }

  sendData(value: string) {
    this.outputData.emit(value)
  }

  private focusListener?: () => void; // Empty function

  constructor(private renderer: Renderer2) { // Renderer 2 - обходной класс созданный для создания кастомных UI решений
    this.inputSubject.next(this.value)
    this.inputSubject.subscribe(x => this.sendData(x))
  }

  ngAfterViewInit(){
    this.focusListener = this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target == this.input.nativeElement || e.target == this.inputField.nativeElement) {
        this.inputActive = true
        this.inputField.nativeElement.focus();
        this.inputActiveData.emit(this.inputActive)
      } else {
        this.inputActive = false;
        this.inputField.nativeElement.blur();
        this.inputActiveData.emit(this.inputActive)
      }
    });
  }

  ngOnDestroy() {
    this.focusListener?.() // Unsubscribe of 'click' event
    this.destroy$.unsubscribe()
  }


}
