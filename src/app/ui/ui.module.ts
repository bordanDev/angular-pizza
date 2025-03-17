import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PizzaCardComponent } from './card/pizza-card.component';
import { InputComponent } from './input/input.component';
import { SwitchComponent } from './switch/switch.component';
import { IngredientsSelectorComponent } from './additional-selector/ingredients-selector.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { IntervalComponent } from './interval/interval.component';



@NgModule({
  declarations: [
    ButtonComponent,
    PizzaCardComponent,
    InputComponent,
    SwitchComponent,
    IngredientsSelectorComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    RadioComponent,
    IntervalComponent
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
    BreadcrumbsComponent,
    CheckboxComponent,
    RadioComponent,
    IntervalComponent
  ]
})
export class UiModule { }
