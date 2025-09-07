import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartDrawerStateService {
  public readonly drawerFlag = signal<boolean>(true);
  public getState() {
    return this.drawerFlag();
  }
  public setState(flag: boolean) {
    this.drawerFlag.set(flag);
  }
}
