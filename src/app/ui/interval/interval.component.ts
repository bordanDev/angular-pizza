import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../../content/pizza/pizza-service/pizza.service";

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {

  constructor(private pizzaService: PizzaService){

  }

  inputMin: string = '0';
  inputMax!: string;

  ngOnInit(){
    // this.setInputValueMin()
  }

  setInputValueMin(value: string){
    this.inputMin = value;
  }

  setInputValueMax(value: string){
    this.inputMax = value;
  }

}
