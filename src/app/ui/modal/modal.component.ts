import { Component, output } from '@angular/core';
import { IconSize } from '../icon/enums/icon.enums';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public isClose = output<boolean>();

  protected close() {
    this.isClose.emit(true);
  }

  protected readonly IconSize = IconSize;
}
