import { inject, Injectable, signal } from "@angular/core";
import { StorageService } from "../../../core/services/storage.service";
import { Pizza } from "../../../shared/interfaces/pizza.interface";

export enum API_KEY {
  PIZZA = 'user_pizza'
}

@Injectable({
  providedIn: 'root'
})

export class CartPizzaService {

  private localStorage = inject(StorageService)

  public localSignalStorage = signal<Pizza[]>([])

  pizzas: Pizza[] = []


  constructor() {
    const stored = this.localStorage.storage.getItem(API_KEY.PIZZA)
    this.pizzas = stored ? JSON.parse(stored) : []
    this.localSignalStorage.set(this.pizzas)
  }

  public setPizzaLocalStorage(pizza: Pizza) {

    const exists = this.pizzas.some(p => p.id === pizza.id);

    this.pizzas = exists
      ? this.pizzas.filter(p => p.id !== pizza.id)
      : [...this.pizzas, pizza];

    this.localStorage.storage.setItem(API_KEY.PIZZA, JSON.stringify(this.pizzas))
    this.localSignalStorage.set(this.getPizza())

  }

  public getPizza(): Pizza[] {
    return this.localStorage.storage.getItem(API_KEY.PIZZA) === null ? [] : JSON.parse(this.localStorage.storage.getItem(API_KEY.PIZZA)!)
  }

  public deleteAllPizza() {
    this.localStorage.storage.removeItem(API_KEY.PIZZA)
    this.pizzas = []
    this.localSignalStorage.set([])
  }

}
