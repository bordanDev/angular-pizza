import { NgModule } from "@angular/core";
import { BolderPipe } from "./pipes/search-bolder.pipe";
import { ListSpacerPipe } from './pipes/ingredients-spacer.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [BolderPipe, ListSpacerPipe, ClickOutsideDirective],
  imports: [],
  exports: [BolderPipe, ListSpacerPipe, ClickOutsideDirective]
})

export class SharedModule {

}
