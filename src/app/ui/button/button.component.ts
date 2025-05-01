import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  @Input() variant: 'primary' | 'secondary' | 'outline' | 'passive' | 'transparent' | 'disabled' = 'primary'; // Перечисляем возможные варианты кнопок, где мы принимаем string. Значение по умолчанию primary
  @Input() isDisabled: boolean = false; // По умолчанию кнопка включена
  @Input() text: string = 'Button';
  @Input() iconPosition: 'left' | 'right' | 'none' = 'none'
  @Input() filterButton: boolean = false;
  @Input() filterButtonActive: boolean = false;
  @Input() isFilled: boolean = false;
  @Input() buttonSize: 'big' | 'md' | 'sm' = 'md'
  @Input() svgIcon!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.setSvgIcon();
  }

  setSvgIcon() {
    const rawSvg = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M7.99967 3.3335V12.6668M3.33301 8.00016H12.6663" stroke="#FE5F00" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(rawSvg);
  }

}
