import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() variant: 'primary' | 'secondary' | 'outline' | 'disabled' = 'primary'; // Перечисляем возможные варианты кнопок, где мы принимаем string. Значение по умолчанию primary

  @Input() isDisabled: boolean = false; // По умолчанию кнопка включена

  // @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() text: string = 'Button';

  @Input() iconPosition: 'left' | 'right' | 'none' = 'none'

  @Input() filterButton: boolean = false;

  @Input() filterButtonActive: boolean = false;

  @Input() isFilled: boolean = false;

  @Input() buttonSize: 'big' | 'md' | 'sm' = 'md'


  svgIcon: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
  <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"></path>
</svg>
  `;

}
