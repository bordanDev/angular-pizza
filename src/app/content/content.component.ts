import {Component, OnInit} from '@angular/core';
import { Ingredients } from './pizza/pizza-services/ingredients.service';
import { PizzaService } from './pizza/pizza-services/pizza.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',

})
export class ContentComponent implements OnInit{
  ngOnInit() {

  }

}
