import { AdditionalIngredientsEnum } from '../enums/additional-ingredients.enum';

// !!! узнать
export type AdditionalIngredient =
  AdditionalIngredientsEnum[keyof AdditionalIngredientsEnum];
