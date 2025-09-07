import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UiModule } from '../ui/ui.module';
import {
  AuthComponent,
  CardCounterComponent,
  ModalComponent,
} from './navigation/components';
import { RegisterComponent } from './navigation/components/modal/forms/register/register.component';
import { SignInComponent } from './navigation/components/modal/forms/sign-in/sign-in.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PizzaListDrawerComponent } from './pizza/components/pizza-list-drawer/pizza-list-drawer.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ModalComponent,
    CardCounterComponent,
    AuthComponent,
    SignInComponent,
    RegisterComponent,
    PizzaListDrawerComponent,
  ],
  imports: [CommonModule, UiModule, SharedModule],
  exports: [NavigationComponent, PizzaListDrawerComponent],
})
export class FeatureModule {}
