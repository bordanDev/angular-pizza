import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';
import { CartPizzaService } from "../../services/cart-pizza.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit{

  addPizza = inject(CartPizzaService)

  constructor(private pizzaService: PizzaService) {
    effect(() => {
      this.pizzaList.set(this.pizzaService.filteredPizza())
      console.log(this.pizzaList())
    }, {allowSignalWrites: true});

    effect(() => {
      this.cart.set(this.addPizza.localSignalStorage())
      console.log(this.cart())
    }, {allowSignalWrites: true});
  }

  ngOnInit(){
    this.pizzaService.pizzas$.subscribe((pizzas) => {
      this.pizzaList.set(pizzas)
      console.log(this.pizzaList())
      console.log('PIZZALISTSETTER')
    })
  }

  // Создаём массив для хранения отфильтрованных пицц
  public pizzaList = signal<Pizza[]>([]);

  cart = signal<Pizza[]>([])

  pizzaAddToStorage(pizza: Pizza){
    console.log('ADD TO STORAGE')
    const exists = this.isInCart(pizza)
    this.cart.set(
      exists
        ? this.cart().filter(p => p.id !== pizza.id)
        : [...this.cart(), pizza]
    )
    console.log(this.addPizza.getPizza())
    this.addPizza.setPizzaLocalStorage(pizza)
  }

  isInCart(pizza: Pizza): boolean{
    return this.cart().some(x => x.id === pizza.id)
  }

  protected readonly Event = Event;
}
