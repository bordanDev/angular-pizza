import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces/user.interface";
import { environment } from "../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private httpClient: HttpClient) {
  }

  public reg(user: User) {
    return this.httpClient.post<User>(environment.apiUrl + '/register', user, { observe: 'response' })
  }

  public logIn(user: User) {
    return this.httpClient.post<User>(environment.apiUrl + '/login', user, { observe: 'response' })
  }

}
