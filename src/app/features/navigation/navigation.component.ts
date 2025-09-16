import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagesEnum } from '../../core/enums/pages.enum';
import { Pizza } from '../../shared/interfaces/pizza.interface';
import { IconSize } from '../../ui/icon/enums/icon.enums';
import { SearchPizzaService } from '../pizza/services/search-pizza.service';
import { CartDrawerStateService } from './services/cart-drawer-state.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  constructor(
    private searchPizza: SearchPizzaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    effect(
      () => {
        this.filteredList.set(this.searchPizza.filteredPizzaByText());
        console.log(this.filteredList());
      },
      { allowSignalWrites: true },
    );
  }

  cartDrawerState = inject(CartDrawerStateService);

  public openSignIn(): void {
    this.router.navigate([{ outlets: { modal: 'sign_in' } }]);
  }

  drawerStateChange() {
    this.router.navigate(['/', { outlets: { drawer: PagesEnum.Cart } }]);
    this.cartDrawerState.setState(true);
  }

  filteredList: WritableSignal<Pizza[]> = signal<Pizza[]>([]);
  inputData = signal<string>('');

  searchActive = false; // Флаг

  changeSearchActive(value: boolean) {
    this.searchActive = value;
  }

  outData(event: string) {
    this.inputData.set(event);
    this.searchPizza.setPizzaBySearchText(event);
  }

  protected readonly IconSize = IconSize;
}
