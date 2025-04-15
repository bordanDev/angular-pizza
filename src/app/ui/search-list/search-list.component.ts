import {Component, input} from '@angular/core';
import {Pizza} from "../../shared/interfaces/pizza.interface";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent{
  searchPizzas = input.required<Pizza[]>()
  textBySearch = input.required<string>()
}
