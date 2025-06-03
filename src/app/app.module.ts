import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { CardCounterComponent } from './features/navigation/components/card/card-counter.component';
import { PizzaFilterButtonsComponent } from './features/pizza/components/pizza-types-filter/pizza-filter-buttons.component';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { UiModule } from './ui/ui.module';
import { PizzaPageComponent } from './features/pizza/components/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PizzaFiltrationComponent } from './features/pizza/components/pizza-filtration/pizza-filtration.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './features/navigation/components/auth/auth.component';
import { NgOptimizedImage } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { OrderPageComponent } from './pages/order-page/order-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardCounterComponent,
    PizzaFilterButtonsComponent,
    PizzaListComponent,
    PizzaPageComponent,
    NotFoundComponent,
    PizzaFiltrationComponent,
    AuthComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    SharedModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
