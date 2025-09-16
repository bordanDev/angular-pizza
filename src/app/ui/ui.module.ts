import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { SharedModule } from '../shared/shared.module';
import { IngredientsSelectorComponent } from './additional-selector/ingredients-selector.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CounterComponent } from './counter/counter.component';
import { DrawerComponent } from './drawer/drawer.component';
import { IconComponent } from './icon/icon.component';
import { IconModule } from './icon/icon.module';
import { InputFcComponent } from './input-fc/input-fc.component';
import { InputComponent } from './input/input.component';
import { IntervalComponent } from './interval/interval.component';
import { LayoutComponent } from './layout';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { RadioComponent } from './radio/radio.component';
import { SearchListItemComponent } from './search-list/search-list-item/search-list-item.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SwitchComponent } from './switch/switch.component';
import { ClickOutsideDirective } from "../shared";

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
    IconComponent,
    DrawerComponent,
    CounterComponent,
    CartItemComponent,
    ModalComponent,
    InputFcComponent,
    LayoutComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FeatherModule,
    SharedModule,
    ClickOutsideDirective
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
    IconModule,
    IconComponent,
    DrawerComponent,
    CounterComponent,
    CartItemComponent,
    ModalComponent,
    InputFcComponent,
    LayoutComponent,
    NotificationComponent,
  ],
})
export class UiModule {}
