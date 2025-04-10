import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { SwitchComponent } from './switch/switch.component';
import { IngredientsSelectorComponent } from './additional-selector/ingredients-selector.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { IntervalComponent } from './interval/interval.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchListItemComponent } from './search-list/search-list-item/search-list-item.component';
import {IconModule} from "./icon/icon.module";
import {FeatherModule} from "angular-feather";
import {IconComponent} from "./icon/icon.component";



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    InputComponent,
    SwitchComponent,
    IngredientsSelectorComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    RadioComponent,
    IntervalComponent,
    SearchListComponent,
    SearchListItemComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FeatherModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ButtonComponent,
    CardComponent,
    InputComponent,
    SwitchComponent,
    IngredientsSelectorComponent,
    BreadcrumbsComponent,
    CheckboxComponent,
    RadioComponent,
    IntervalComponent,
    SearchListComponent,
    IconModule
  ]
})
export class UiModule { }
