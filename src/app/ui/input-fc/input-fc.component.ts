import { Component, forwardRef, input, Input, InputSignal, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input-fc',
  templateUrl: './input-fc.component.html',
  styleUrl: './input-fc.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFcComponent),
      multi: true
    }
  ]
})

export class InputFcComponent implements ControlValueAccessor, OnInit{
  value: string = ''
  disabled = false;

  ngOnInit(){
    console.log(this.dynamicStyles())
  }

  onChange = (_: any) => {}
  onTouched = () => {}

  writeValue(value: string){
    this.value = value;
  }

  registerOnChange(fn: any){
    this.onChange = fn
  }

  registerOnTouched(fn: any){
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean){
    this.disabled = isDisabled
  }

  dynamicStyles: InputSignal<DynamicStyle> = input({})
  variant: InputSignal<InputVariantEnum> = input<InputVariantEnum>(InputVariantEnum.PRIMARY)

  get computedStyles(){

    const baseStyles = {
      borderStyle: 'solid',
      padding: '14px 20px',
      borderRadius: '16px'
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
        secondary: {
          borderColor: '#6c757d',
          backgroundColor: '#e9ecef',
        },
        danger: {
          borderColor: '#dc3545',
          backgroundColor: '#f8d7da',
        },
        disabled: {
          borderColor: '#dc3545',
          backgroundColor: '#f8d7da',
        }
      }

      return styles[variant]
  }

}

interface DynamicStyle {
  [key: string] : string;
}

export enum InputVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  DISABLED = 'disabled'
}

export type InputVariant =
  InputVariantEnum.PRIMARY |
  InputVariantEnum.SECONDARY |
  InputVariantEnum.DANGER |
  InputVariantEnum.DISABLED
