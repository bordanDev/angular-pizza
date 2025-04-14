import {Component, input, InputSignal} from "@angular/core";
import {IconSize} from "./enums/icon.enums";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: 'icon.component.scss',
})

export class IconComponent {
  name: InputSignal<string> = input.required()
  size: InputSignal<IconSize.lg | IconSize.md | IconSize.sm | undefined> = input.required()
  protected readonly IconSize = IconSize;
}
