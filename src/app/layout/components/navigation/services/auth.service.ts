import { Injectable, Signal, signal } from "@angular/core";

@Injectable({
  providedIn : 'root'
})

export class AuthService {

  authModalState = signal<boolean>(false);

  setState(value: boolean){
    this.authModalState.set(value)
  }

  getState(): boolean{
    return this.authModalState()
  }

}
