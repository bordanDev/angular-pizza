import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  HostBinding,
  Input,
  input,
  InputSignal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UtlOptional } from '../../core/types/utl-optional.type';
import { InputTypeEnum, InputVariantEnum } from './enums';
import { InputTextAlign, InputType } from './types';

@Component({
  selector: 'app-input-fc',
  templateUrl: './input-fc.component.html',
  styleUrl: './input-fc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFcComponent),
      multi: true,
    },
  ],
})
export class InputFcComponent implements ControlValueAccessor {
  protected value = '';
  protected disabled = false;
  protected isErrorMessage = false;
  public isField: InputSignal<boolean> = input(false);
  public textAlign: InputSignal<UtlOptional<InputTextAlign>> = input();
  public type: InputSignal<InputType> = input<InputType>(InputTypeEnum.TEXT);
  public placeholder = input<string>('');

  protected variant: InputSignal<InputVariantEnum> = input<InputVariantEnum>(
    InputVariantEnum.PRIMARY,
  );

  @HostBinding('style.width.%')
  @Input()
  width = 100;

  onChange: (value: string) => void = () => {
    return;
  };

  onTouched: () => void = () => {
    return;
  };

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(
    fn: (value: string) => void = () => {
      return;
    },
  ) {
    this.onChange = fn;
  }

  registerOnTouched(
    fn: () => void = () => {
      return;
    },
  ) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  protected getClasses = computed(
    (): Record<string, UtlOptional<boolean | string>> => {
      return {
        filled: this.isField(),
        ['text-align-' + this.textAlign()]: this.textAlign() ? true : false,
        primary: this.variant() === InputVariantEnum.PRIMARY,
        disabled: this.variant() === InputVariantEnum.DISABLED,
        touched: this.variant() === InputVariantEnum.TOUCHED,
        danger: this.variant() === InputVariantEnum.DANGER,
      };
    },
  );
}
