import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';
import { UserPizzaService } from '../../api/user-pizza.service';
import {
  isInCart,
  userPizzaStorageHelper,
} from '../../helpers/user-pizza-storage.helper';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
})
export class PizzaListComponent implements OnInit {
  userPizzaService = inject(UserPizzaService);

  constructor(private pizzaService: PizzaService) {
    effect(
      () => {
        this.pizzaList.set(this.pizzaService.filteredPizza());
        console.log(this.pizzaList());
      },
      { allowSignalWrites: true },
    );

    this.userPizzaService.userPizza$.subscribe((pizzas) => {
      this.cart.set(pizzas);
    });
  }

  ngOnInit() {
    this.pizzaService.pizzas$.subscribe((pizzas) => {
      this.pizzaList.set(pizzas);
    });

    this.userPizzaService.getUserPizza().subscribe();
  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList = signal<Pizza[]>([]);

  cart = signal<Pizza[]>([]);

  pizzaAddToStorage(pizza: Pizza) {
    userPizzaStorageHelper(
      pizza,
      this.cart(), // значение сигнала
      this.userPizzaService,
      (pizza, storage) => {
        return isInCart(pizza, storage);
      },
      () => {
        console.log('TEST TEST tESET');
      },
    );
  }

  isInCartForList(pizza: Pizza): boolean {
    return isInCart(pizza, this.cart());
  }

  protected readonly Event = Event;
}
