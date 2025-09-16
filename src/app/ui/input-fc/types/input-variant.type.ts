import { InputVariantEnum } from '../enums';

export type InputVariant =
  | InputVariantEnum.PRIMARY
  | InputVariantEnum.TOUCHED
  | InputVariantEnum.DANGER
  | InputVariantEnum.DISABLED;
