import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Pizza } from '../../../shared/interfaces/pizza.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserPizzaService {
  private http = inject(HttpClient);

  private userPizzaSubject: BehaviorSubject<Pizza[]> = new BehaviorSubject<
    Pizza[]
  >([]);
  public userPizza$: Observable<Pizza[]> = this.userPizzaSubject.asObservable();

  public getUserPizza(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(environment.apiUrl + '/get-user-pizza').pipe(
      tap((pizzas) => {
        this.userPizzaSubject.next(pizzas);
      }),
    );
  }

  public setUserPizza(userPizza: Pizza): Observable<Pizza> {
    console.log('SET REQUEST IS SEND');
    return this.http.post<Pizza>(
      environment.apiUrl + '/set-user-pizza',
      userPizza,
    );
  }

  public deleteUserPizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(
      environment.apiUrl + '/delete-user-pizza/' + id,
    );
  }
}
