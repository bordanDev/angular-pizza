import {
  Component,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

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

  private inputSubject = new Subject<string>()
  private destroy$ = new Subject<void>()


  // Задержка на уровне UI элемента
  // ВСЕ инпуты отдают значения с задержкой 0.5 секунд
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

  }

  // ngOnInit(){
  //   // const map = new Map();
  //   // map.set('key', ['1', '2', '3'])
  //   // console.log(map.get('key')[2])
  // }

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
    this.destroy$.unsubscribe()
  }


}
