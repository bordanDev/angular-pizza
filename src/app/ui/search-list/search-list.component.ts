import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../../features/pizza/services/pizza.service";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent implements OnInit{

  constructor(private pizza: PizzaService){}

  ngOnInit(){
    this.pizza.pizzas$.subscribe(x => console.log(x))
    console.log()
  }

}
