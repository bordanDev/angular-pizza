import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PizzaService } from '../service/pizza.service';
import { Pizza } from '../pizza.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit, OnDestroy {


  constructor(private pizzaService: PizzaService) {

  }

  ngOnInit(): void {
    this.pizzaService.pizzas$.subscribe((thinkness) => {
      this.filteredPizza.set(thinkness)
    })
  }

  // Создаём массив для хранения отфильтрованных пицц
  public filteredPizza: WritableSignal<Pizza[]> = signal([]);
  // Создаём объект rxjs для подписки на сервис и получения данных
  private subscription!: Subscription;



  public itemPage(index: number) {
    console.log('Pizza with ' + index + ' ID was clicked')
  }


  ngOnDestroy(): void { // Избавляемся от подписки
    if (this.subscription) {
      this.subscription.unsubscribe(); // rxjs
    }
  }

}
