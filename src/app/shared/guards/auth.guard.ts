import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AuthGuard{
  constructor(private router: Router) {}

  canActivate(): boolean {
    localStorage.setItem('token', '123')
    const isActivated = localStorage.getItem('token');

    console.log(localStorage)
      if(!isActivated){
        this.router.navigate(['/login'])
        console.log(false)
        return false;
      }
    console.log(true)
    return true
  }

}
