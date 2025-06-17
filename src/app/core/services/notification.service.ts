import { Injectable, signal, WritableSignal } from '@angular/core';
import { Notification } from "../../shared/interfaces/notification.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private handleNotificationSubject = new BehaviorSubject<Notification | undefined>(undefined);
  public $handleNotification: Observable<Notification | undefined> = this.handleNotificationSubject.asObservable();

  public lastStatus: WritableSignal<NotificationStatus> = signal(NotificationStatusEnum.NORMAL);

  public addNotification(status: number) {
    if (status === 201){
      this.lastStatus.set(NotificationStatusEnum.SUCCESSFULLY);
      this.handleNotificationSubject.next({ title: "Successfully login into the system", subtitle: "Now you can manage your pizzas" });
    } else if (status === 500) {
      this.lastStatus.set(NotificationStatusEnum.DANGER);
     this.handleNotificationSubject.next({ title: "Something went wrong", subtitle: "Repeat or try to do it next time" });
    }
  }

  public unsetNotification() {
    this.handleNotificationSubject.next(undefined)
  }

}

enum NotificationStatusEnum {
  SUCCESSFULLY = 'successfully',
  DANGER = 'danger',
  WARNING = 'warning',
  NORMAL = 'normal'
}

export type NotificationStatus =
    NotificationStatusEnum.SUCCESSFULLY |
    NotificationStatusEnum.DANGER |
    NotificationStatusEnum.WARNING |
    NotificationStatusEnum.NORMAL

