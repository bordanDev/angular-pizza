import { AfterViewInit, Component, ElementRef, OnInit, output, TemplateRef, ViewChild } from '@angular/core';
import { IconSize } from "../icon/enums/icon.enums";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit{

  isClose = output<boolean>()

  close(){
    this.isClose.emit(true)
  }

  ngAfterViewInit(){
    console.log('asd')
  }

  protected readonly IconSize = IconSize;
  protected readonly escape = escape;
}
