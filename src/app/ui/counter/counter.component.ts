import { Component, signal, WritableSignal } from '@angular/core';
import { IconSize } from '../icon/enums/icon.enums';
import { InputTextAlignEnums } from '../input-fc/enums';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  protected counter: WritableSignal<number> = signal(1);
  protected isCounterClicked: WritableSignal<boolean> = signal(false);

  dec() {
    let value = this.counter();
    if (this.counter() > 0) {
      this.counter.set(--value);
    }
    console.log(this.counter());
  }

  inc() {
    let value = this.counter();
    this.counter.set(++value);
    console.log(this.counter());
  }

  protected readonly IconSize = IconSize;
  protected readonly InputTextAlign = InputTextAlignEnums;
}
