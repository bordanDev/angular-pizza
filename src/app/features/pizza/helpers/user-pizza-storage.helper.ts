import { Pizza } from '../../../shared/interfaces/pizza.interface';
import { UserPizzaService } from '../api/user-pizza.service';

export function userPizzaStorageHelper(
  pizza: Pizza,
  storagePizza: Pizza[],
  userPizzaService: UserPizzaService,
  isInCartFn: (pizza: Pizza, storagePizza: Pizza[]) => boolean, // If Local storage has pizza element // If true, we save this element within back-end
  afterToggle?: () => void,
): void {
  const exists = isInCartFn(pizza, storagePizza);
  if (exists) {
    console.log('DELETE PIZZA');
    userPizzaService.deleteUserPizza(pizza.id).subscribe(() => {
      userPizzaService.getUserPizza().subscribe();
      afterToggle?.(); // If we want to put some log when method is happened
    });
  } else {
    console.log('SET PIZZA');
    userPizzaService.setUserPizza(pizza).subscribe(() => {
      userPizzaService.getUserPizza().subscribe();
      afterToggle?.(); // If we want to put some log when method is happened
    });
  }
}

export function isInCart(pizza: Pizza, storage: Pizza[]): boolean {
  return storage.some((x) => x.id === pizza.id);
}
