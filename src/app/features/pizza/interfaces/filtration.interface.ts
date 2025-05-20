export interface Tag {
  value: string
}

export interface Interval {
  min: number,
  max: number
}

export interface TypeOfDough {
  value: string
}

export interface FiltrationUI {
  tags: Tag[],
  interval: Interval[],
  typeOfDough: TypeOfDough[]
}
