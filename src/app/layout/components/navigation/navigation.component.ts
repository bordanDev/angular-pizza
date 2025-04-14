import { Component, ViewChild } from '@angular/core';
import { SearchPizzaService } from "../../../features/pizza/services/search-pizza.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent{

  constructor(private searchPizza: SearchPizzaService) {
  }

  @ViewChild("background") backgroundArea: any;

  searchActive: boolean = false; // Флаг

  changeSearchActive(){
    this.searchActive = !this.searchActive;
  }

  outData(event: string){
    console.log(event)
    this.searchPizza.setPizzaBySearchText(event)
  }


}
