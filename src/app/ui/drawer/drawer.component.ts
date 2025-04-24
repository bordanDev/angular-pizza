import { Component, effect, inject, signal, TemplateRef, ViewChild } from '@angular/core';
import { CartPizzaService } from "../../features/pizza/services/cart-pizza.service";
import { Pizza } from "../../shared/interfaces/pizza.interface";
import { IconSize } from "../icon/enums/icon.enums";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  host: {
    '[style.justify-content]': 'drawerPizza() ? "space-between" : "center"'
  }
})
export class DrawerComponent {

  @ViewChild(TemplateRef) drawer: TemplateRef<unknown> | undefined;
  @ViewChild(TemplateRef) drawerEmpty: TemplateRef<unknown> | undefined;

  drawerPizzaData = inject(CartPizzaService);

  constructor(private location: Location) {
    effect(() => {
      this.drawerPizza.set(this.drawerPizzaData.localSignalStorage())
    }, {allowSignalWrites: true});
  }

  drawerPizza = signal<Pizza[]>([])

  totalPrice: number = 0

  closeDrawer(){
    this.location.back()
  }

  protected readonly IconSize = IconSize;
}
