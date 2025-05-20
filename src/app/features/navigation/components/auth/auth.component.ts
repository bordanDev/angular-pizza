import { Component } from '@angular/core';
import { IconSize } from "../../../../ui/icon/enums/icon.enums";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  authFlag = true;

  protected readonly IconSize = IconSize;
}
