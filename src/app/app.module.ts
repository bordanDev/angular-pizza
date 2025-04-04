import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './header/auth/auth.component';
import { ContentComponent } from './content/content.component';
import { PizzaFilterButtonsComponent } from './content/pizza/pizza-types-filter/pizza-filter-buttons.component';
import { PizzaListComponent } from './content/pizza/pizza-list/pizza-list.component';
import { UiModule } from './ui/ui.module';
import { PizzaPageComponent } from './content/pizza/pizza-page/pizza-page.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { PizzaFiltrationComponent } from './content/pizza/pizza-filtration/pizza-filtration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ContentComponent,
    PizzaFilterButtonsComponent,
    PizzaListComponent,
    PizzaPageComponent,
    NotFoundComponent,
    PizzaFiltrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
