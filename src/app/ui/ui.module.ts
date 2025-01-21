import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';
import { InputComponent } from './input/input.component';
import { SwitchComponent } from './switch/switch.component';
import { IngredientsSelectorComponent } from './ingredients-selector/ingredients-selector.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PizzaCardComponent,
    InputComponent,
    SwitchComponent,
    IngredientsSelectorComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonComponent,
    PizzaCardComponent,
    InputComponent,
    SwitchComponent,
    IngredientsSelectorComponent,
    BreadcrumbsComponent
  ]
})
export class UiModule { }
