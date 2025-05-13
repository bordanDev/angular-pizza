import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CartPizzaService } from './features/pizza/services/cart-pizza.service';
import { Pizza } from './shared/interfaces/pizza.interface';
import { CartDrawerStateService } from "./features/navigation/services/cart-drawer-state.service";
import { IconSize } from './ui/icon/enums/icon.enums';
import { environment } from '../environments/environment';
import { PizzaService } from './features/pizza/services/pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
export class AppComponent implements OnInit{

  private pizzaService = inject(PizzaService)

  ngOnInit(){
    console.log(environment.production);
    this.pizzaService.loadPizza().subscribe();
    this.pizzaService.loadUi().subscribe()
  }

  title = 'Angular Pizza';

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
