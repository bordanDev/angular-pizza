export interface Interval{
  minValue: number;
  maxValue: number;
}

export interface IntervalArray{
  intervalName: string;
  intervals: Interval[]
}