import { Injectable, signal } from "@angular/core";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class CartDrawerStateService {

  constructor() {
    this.drawerFlag.set(false)
  }

  drawerFlag = signal<boolean>(false)

  getState(){
    return this.drawerFlag()
  }

  setState(flag: boolean){
    this.drawerFlag.set(flag)
  }

}
