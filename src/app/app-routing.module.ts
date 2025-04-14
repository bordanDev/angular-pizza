import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
