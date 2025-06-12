import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { SearchPizzaService } from "../pizza/services/search-pizza.service";
import { IconSize } from "../../ui/icon/enums/icon.enums";
import { Pizza } from "../../shared/interfaces/pizza.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { CartDrawerStateService } from "./services/cart-drawer-state.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent{

  constructor(private searchPizza: SearchPizzaService, private activatedRoute: ActivatedRoute, private router: Router){
    effect(()=> {
      this.filteredList.set(this.searchPizza.filteredPizzaByText())
      console.log(this.filteredList())
    }, {allowSignalWrites: true})
  }

  cartDrawerState = inject(CartDrawerStateService)

  public openSignIn(): void{
    this.router.navigate([{ outlets: { modal: 'sign_in' }}])
  }

  drawerStateChange(){
    console.log('TEST')
    this.cartDrawerState.setState(true)
    console.log(this.cartDrawerState.getState())
  }

  filteredList: WritableSignal<Pizza[]> = signal<Pizza[]>([])
  inputData= signal<string>('')

  searchActive = false; // Флаг

  changeSearchActive(value: boolean){
    this.searchActive = value;
  }

  outData(event: string){
    this.inputData.set(event)
    this.searchPizza.setPizzaBySearchText(event)
  }

  protected readonly IconSize = IconSize;
}
