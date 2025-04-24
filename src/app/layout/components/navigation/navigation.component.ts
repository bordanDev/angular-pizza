import {Component, effect, signal, ViewChild, WritableSignal} from '@angular/core';
import { SearchPizzaService } from "../../../features/pizza/services/search-pizza.service";
import { IconSize } from "../../../ui/icon/enums/icon.enums";
import { Pizza } from "../../../shared/interfaces/pizza.interface";
import { PagesEnum } from "../../../core/enums/pages.enum";
import { Route, Router } from "@angular/router";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{

  constructor(private searchPizza: SearchPizzaService, private router: Router){
    effect(()=> {
      this.filteredList.set(this.searchPizza.filteredPizzaByText())
      console.log(this.filteredList())
    }, {allowSignalWrites: true})
  }

  filteredList: WritableSignal<Pizza[]> = signal<Pizza[]>([])
  inputData= signal<string>('')

  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг

  changeSearchActive(value: boolean){
    console.log(value)
    this.searchActive = value;
  }

  outData(event: string){
    this.inputData.set(event)
    this.searchPizza.setPizzaBySearchText(event)
  }

  navigateTo(): string{
    return this.router.url + '/list'
  }

  protected readonly IconSize = IconSize;
  protected readonly PagesEnum = PagesEnum;
  protected readonly Router = Router;
}
