import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './features/pizza/components/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesEnum } from "./core/enums/pages.enum";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: PagesEnum.Main
  },
  {
    path: PagesEnum.Main,
    component: PizzaListComponent,
  },
  {
    path: PagesEnum.Main + '/' + PagesEnum.Pizza + '/:id',
    component: PizzaPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
