import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './header/authorization/authorization.component';
import { ContentComponent } from './content/content.component';
import { PizzaFilterButtonsComponent } from './content/pizza-filter-buttons/pizza-filter-buttons.component';
import { PizzaListComponent } from './content/pizza-list/pizza-list.component';
import { UiModule } from './ui/ui.module';
import { PizzaPageComponent } from './content/pizza-page/pizza-page.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { PizzaFiltrationComponent } from './content/pizza-filtration/pizza-filtration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthorizationComponent,
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
