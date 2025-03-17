import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PizzaService } from '../pizza-service/pizza.service';
import { Pizza } from '../../pizza.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {

  constructor(private pizzaService: PizzaService) {  }

  ngOnInit(): void {
    this.pizzaService.pizzas$.subscribe((pizzas) => {
      this.pizzaList.set(pizzas)
    })
  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList: WritableSignal<Pizza[]> = signal([]);

}
