import { NgModule } from '@angular/core';
import { ListSpacerPipe } from './pipes/ingredients-spacer.pipe';
import { BolderPipe } from './pipes/search-bolder.pipe';

@NgModule({
  declarations: [BolderPipe, ListSpacerPipe],
  imports: [],
  exports: [BolderPipe, ListSpacerPipe],
})
export class SharedModule {}
