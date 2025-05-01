import { Component, output } from '@angular/core';
import { IconSize } from "../icon/enums/icon.enums";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  isClose = output<boolean>()

  close(){
    this.isClose.emit(true)
  }

  protected readonly IconSize = IconSize;
}
