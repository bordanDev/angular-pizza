import {Component, input} from '@angular/core';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent{

  minValue = input<string>()
  maxValue = input<string>() 

  
}
