import { Component } from '@angular/core';
import {IconSize} from "../../ui/icon/enums/icon.enums";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  protected readonly IconSize = IconSize;
}
