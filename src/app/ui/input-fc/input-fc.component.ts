import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-fc',
  templateUrl: './input-fc.component.html',
  styleUrl: './input-fc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFcComponent),
      multi: true
    }
  ]
})

export class InputFcComponent implements ControlValueAccessor, OnInit{
  value = ''
  disabled = false;
  isErrorMessage = false;
  type: InputSignal<InputType> = input<InputType>(InputTypeEnum.TEXT);

  placeholder = input<string>('');

  ngOnInit(){
    console.log(this.dynamicStyles())
  }

  onChange: (value: string) => void = () => { return };
  onTouched:() => void = () => { return }

  writeValue(value: string){
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void = () => { return }){
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void = () => { return }){
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled;
  }

  dynamicStyles: InputSignal<DynamicStyle> = input({})
  variant: WritableSignal<InputVariantEnum> = signal<InputVariantEnum>(InputVariantEnum.PRIMARY)

  get computedStyles(){

    const baseStyles = {
      borderStyle: 'solid',
      padding: '14px 20px',
      borderRadius: '16px',
      backgroundColor: '#fffff',
      width: '-webkit-fill-available'
    }

    const variantStyles = this.getVariantStyles(this.variant())

    return { ...baseStyles, ...variantStyles }

  }

  private getVariantStyles(variant: InputVariant){
      const styles = {
        primary: {
          borderStyle: 'solid',
          borderColor: '#EFEFEF',
        },
        touched: {
          borderColor: '#6c757d',
        },
        danger: {
          borderColor: '#dc3545',
          backgroundColor: '#f8d7da',
        },
        disabled: {
          color: '#C4C4C4',
          borderColor: '#F5F5F5',
        }
      }

      return styles[variant]
  }

}

type DynamicStyle = Record<string, string>;

export enum InputVariantEnum {
  PRIMARY = 'primary',
  TOUCHED = 'touched',
  DANGER = 'danger',
  DISABLED = 'disabled'
}

export type InputVariant =
  InputVariantEnum.PRIMARY |
  InputVariantEnum.TOUCHED |
  InputVariantEnum.DANGER |
  InputVariantEnum.DISABLED


export enum InputTypeEnum {
  PASSWORD = 'password',
  TEXT = 'text'
}

export type InputType =
  InputTypeEnum.TEXT |
  InputTypeEnum.PASSWORD
