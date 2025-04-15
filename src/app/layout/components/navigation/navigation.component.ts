import {Component, effect, signal, ViewChild, WritableSignal} from '@angular/core';
import { SearchPizzaService } from "../../../features/pizza/services/search-pizza.service";
import { IconSize } from "../../../ui/icon/enums/icon.enums";
import { Pizza } from "../../../shared/interfaces/pizza.interface";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{

  constructor(private searchPizza: SearchPizzaService){
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


  protected readonly IconSize = IconSize;
}
