import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesEnum } from "./core/enums/pages.enum";
import { DrawerComponent } from "./ui/drawer/drawer.component";

const routes: Routes = [
  {
    path: PagesEnum.Main,
    component: PizzaListComponent,
    children: [
      {
        path: 'list',
        component: DrawerComponent
      }
    ]
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
