import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './content/pizza/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './content/pizza/pizza-page/pizza-page.component';

const routes: Routes = [

  {
    path: 'pizzas',
    component: PizzaListComponent
  },
  {
    path: 'pizzas/pizza',
    component: PizzaPageComponent
  },

  { path: '**', component: PizzaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
