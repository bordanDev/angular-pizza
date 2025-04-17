export interface Pizza {
  id: number;
  type: string;
  title: string;
  ingredients: string[];
  price: number;
  imgUrl: string;
  tag: string;
  thickness: string;
  size: string,
  weight: number,
  additionalIngredients: string[]
}

export interface PizzaAdditionalIngredients {
  title: string;
  imgUrl: string;
  price: number;
  state: boolean
}
