import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { StorageService } from "../../core/services/storage.service";
import { CartPizzaService } from "../../features/pizza/services/cart-pizza.service";
import { Pizza } from "../../shared/interfaces/pizza.interface";
import { CartDrawerStateService } from "../components/navigation/services/cart-drawer-state.service";
import { animate, AnimationEvent, state, style, transition, trigger } from "@angular/animations";
import { IconSize } from "../../ui/icon/enums/icon.enums";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('slideAnimation', [
      state('hidden', style({
        transform: 'translateX(100%)'
      })),
      state('visible', style({
        transform: 'translateX(0)'
      })),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in'))
    ])
  ]
})
export class MainComponent{

  cartStorage = inject(CartPizzaService)
  itemsForDrawer = signal<Pizza[]>([])

  drawerState = false;
  cartDrawerState = inject(CartDrawerStateService)

  constructor() {
    effect(() => {
      this.itemsForDrawer.set(this.cartStorage.localSignalStorage())
    }, {allowSignalWrites: true});

    effect(() => {
      this.drawerState = this.cartDrawerState.drawerFlag()
    }, {allowSignalWrites: true});
  }

  setDrawerState(value: boolean){
    this.cartDrawerState.setState(value)
  }


  protected readonly IconSize = IconSize;
}
