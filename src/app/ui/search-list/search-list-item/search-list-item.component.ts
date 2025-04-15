import {Component, input, InputSignal} from '@angular/core';
import {Pizza} from "../../../shared/interfaces/pizza.interface";

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrl: './search-list-item.component.scss'
})
export class SearchListItemComponent {
  userText = input.required<string>()
  pizza: InputSignal<Pizza> = input.required<Pizza>()
}
