import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaFilterButtonsComponent } from './features/pizza/components/pizza-types-filter/pizza-filter-buttons.component';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { UiModule } from './ui/ui.module';
import { PizzaPageComponent } from './features/pizza/components/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PizzaFiltrationComponent } from './features/pizza/components/pizza-filtration/pizza-filtration.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { FeatureModule } from "./features/feature.module";
@NgModule({
  declarations: [
    AppComponent,
    PizzaFilterButtonsComponent,
    PizzaListComponent,
    PizzaPageComponent,
    NotFoundComponent,
    PizzaFiltrationComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    SharedModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    FeatureModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
