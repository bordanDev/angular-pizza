import { Component, inject, OnInit } from '@angular/core';
import { Pizza } from '../../../../shared/interfaces/pizza.interface';
import { PizzaAdditionalIngredient } from '../../interfaces/pizza-additional-ingridients.interface';
import { PizzaService } from '../../services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { IconSize } from '../../../../ui/icon/enums/icon.enums';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.scss',
})
export class PizzaPageComponent implements OnInit {
  pizzaService = inject(PizzaService);
  routerActive = inject(ActivatedRoute);

  pizzaPageId!: string;
  pizzaArray: Pizza[] = [];
  currentPizza!: Pizza;

  testIngredients: PizzaAdditionalIngredient[] = [];

  ngOnInit() {
    this.routerActive.url.subscribe(
      (x) => (this.pizzaPageId = x[x.length - 1].path),
    );

    this.pizzaService.pizzaAdditionalIngredients$.subscribe((selectors) => {
      console.log(selectors);
      this.testIngredients.push(...selectors);
      console.log(this.testIngredients);
    });

    this.pizzaService.pizzas$.subscribe((pizzas) => {
      this.pizzaArray = pizzas;
      const filteredPizza = this.pizzaArray.filter(
        (x) => x.id.toString() === this.pizzaPageId,
      );
      this.currentPizza = filteredPizza[0];
      this.totalPrice = this.currentPizza.price;
    });
  }

  selectedIngredients: PizzaAdditionalIngredient[] = [];

  totalPrice!: number;

  selectedChanged(selected: PizzaAdditionalIngredient[]) {
    this.selectedIngredients = selected;
    this.toggleItemInCollection(selected);
    console.log('Выбранные ингредиенты:', selected);
  }

  toggleItemInCollection(selected: PizzaAdditionalIngredient[]) {
    console.log('test');
    this.totalPrice = selected.reduce(
      (sum, ingredient) => (this.totalPrice = sum + ingredient.price),
      this.currentPizza.price,
    );
  }

  pizzaSizeArray: string[] = ['Small', 'Middle', 'Big'];

  pizzaThicknessArray: string[] = ['Standard', 'Tint'];

  activePizzaSize = 'Small'; // Хранящяя переменная

  activePizzaThickness = 'Standard'; // Хранящяя переменная

  onSwitchSize(index: number) {
    this.activePizzaSize = this.pizzaSizeArray[index];
  }

  onSwitchThickness(index: number) {
    this.activePizzaThickness = this.pizzaThicknessArray[index];
  }

  protected readonly IconSize = IconSize;
}
