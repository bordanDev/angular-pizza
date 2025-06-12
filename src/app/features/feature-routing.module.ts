import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ModalComponent } from "./navigation/components";

const routes: Routes = [
  { path: '', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureModule {}
