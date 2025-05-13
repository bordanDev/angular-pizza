import { NgModule } from "@angular/core";
import { BolderPipe } from "./pipes/search-bolder.pipe";
import { ListSpacerPipe } from './pipes/ingredients-spacer.pipe';

@NgModule({
  declarations: [BolderPipe, ListSpacerPipe],
  imports: [],
  exports: [BolderPipe, ListSpacerPipe]
})

export class SharedModule {

}
