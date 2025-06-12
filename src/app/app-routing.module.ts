import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaListComponent } from './features/pizza/components/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './features/pizza/components/pizza-page/pizza-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PagesEnum } from './core/enums/pages.enum';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ModalComponent } from "./features/navigation/components";
import { RegisterComponent } from "./features/navigation/components/modal/forms/register/register.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: PagesEnum.Main,
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
    path: PagesEnum.Order + '/:id',
    component: OrderPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

const drawerRoutes: Routes = [
  {
    path: ':sign_in',
    outlet: 'modal',
    component: ModalComponent
  },
  {
    path: ':register',
    outlet: 'modal',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(drawerRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
