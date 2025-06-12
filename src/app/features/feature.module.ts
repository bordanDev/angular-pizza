import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "./navigation/navigation.component";
import { AuthComponent, CardCounterComponent, ModalComponent } from "./navigation/components";
import { UiModule } from "../ui/ui.module";
import { SharedModule } from "../shared/shared.module";
import { SignInComponent } from './navigation/components/modal/forms/sign-in/sign-in.component';
import { RegisterComponent } from './navigation/components/modal/forms/register/register.component';

@NgModule({
  declarations: [
    NavigationComponent,
    ModalComponent,
    CardCounterComponent,
    AuthComponent,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, UiModule, SharedModule],
  exports: [NavigationComponent],
})
export class FeatureModule {}
