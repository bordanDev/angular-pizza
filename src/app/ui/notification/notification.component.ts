import { Component, effect, inject, input, InputSignal, OnInit } from '@angular/core';
import { IconSize } from "../icon/enums/icon.enums";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { NotificationService, NotificationStatus } from "../../core/services/notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  animations: [
    trigger('slideAnimation', [
      state(
        'hidden',
        style({
          transform: 'translateX(120%)',
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translateX(0)',
        }),
      ),
      transition('hidden => visible', animate('300ms ease-out')),
      transition('visible => hidden', animate('300ms ease-in')),
    ]),
  ],
})
export class NotificationComponent implements OnInit{

  private not = inject(NotificationService)
  constructor() {
    effect(() => {
      console.log('EFFECT')
      console.log(this.notificationType)
      if(this.stateToggler()){
        this.activateNotification();
      } else {
        this.deactivateNotification();
      }
    }, { allowSignalWrites: true });

    effect(() => {
      console.log(this.not.lastStatus())
      this.notificationType = this.not.lastStatus();
    }, {allowSignalWrites: true})
  }

  isVisible = false;
  stateToggler: InputSignal<boolean> = input.required();

  title: InputSignal<string> = input.required();
  subtitle: InputSignal<string> = input.required();
  notificationType!: NotificationStatus;

  timeOut = 3000;

  ngOnInit(){
    console.log('test')
    console.log(this.notificationType)
  }

  activateNotification() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
      this.not.unsetNotification()
    }, this.timeOut)
  }

  deactivateNotification() {
    this.isVisible = false
    this.not.unsetNotification()
  }


  protected readonly IconSize = IconSize;
}

