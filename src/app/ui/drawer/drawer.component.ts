import { Component, input, InputSignal, output } from '@angular/core';
import { IconSize } from "../icon/enums/icon.enums";


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
  animations: [

  ]
})
export class DrawerComponent {

  title: InputSignal<string> = input('Placeholder')
  isClose = output<boolean>()

  drawerClose(){
    this.isClose.emit(false)
  }

  protected readonly IconSize = IconSize;
}
