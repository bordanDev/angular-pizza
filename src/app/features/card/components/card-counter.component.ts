import { Component, effect, signal } from '@angular/core';
import { IconSize } from "../../../ui/icon/enums/icon.enums";
import { AddPizzaService } from "../../pizza/services/add-pizza.service";

@Component({
  selector: 'app-card-counter',
  templateUrl: './card-counter.component.html',
  styleUrls: ['./card-counter.component.scss']
})
export class CardCounterComponent{

  counter = signal<number>(0)

  constructor(private addPizza: AddPizzaService) {
    effect(() => {
      this.counter.set(this.addPizza.localSignalStorage().length)
    }, {
      allowSignalWrites: true
    });
  }

  protected readonly IconSize = IconSize;
}
