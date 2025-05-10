import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent{

  minValue = input<string>()
  maxValue = input<string>()

  minValueOut = output<string>()
  maxValueOut = output<string>()

  minChanged(inputValue: string){
    this.minValueOut.emit(inputValue)
  }

  maxChanged(inputValue: string){
    this.maxValueOut.emit(inputValue)
  }

}
