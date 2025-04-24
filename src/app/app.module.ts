import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layout/components/navigation/navigation.component';
import { CardCounterComponent } from './features/card/components/card-counter.component';
import { MainComponent } from './layout/main/main.component';
import { PizzaFilterButtonsComponent } from './features/pizza/components/pizza-types-filter/pizza-filter-buttons.component';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { UiModule } from './ui/ui.module';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PizzaFiltrationComponent } from './features/pizza/components/pizza-filtration/pizza-filtration.component';
import { SharedModule } from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardCounterComponent,
    MainComponent,
    PizzaFilterButtonsComponent,
    PizzaListComponent,
    PizzaPageComponent,
    NotFoundComponent,
    PizzaFiltrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
