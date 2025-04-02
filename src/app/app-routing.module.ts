import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './content/pizza/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './content/pizza/pizza-page/pizza-page.component';
import { NotFoundComponent } from './content/not-found/not-found.component';

const routes: Routes = [

  {
    path: 'pizzas',
    component: PizzaListComponent
  },
  {
    path: 'pizzas/pizza',
    component: PizzaPageComponent
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
