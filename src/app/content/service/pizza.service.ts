import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  // Мы должны применить существующий класс из библиотеки rxjs для сохранения текущих данных
  // Создаём публичный объект

  public categoryData = new BehaviorSubject<string>('All'); // rxjs потребует первоначальное значение 
  // Была мысль передавать в инициализируемое зачение то, что находится в компоненте фильтрации, где в массиве есть поле active true

  // Теперь мы имеем объект которым можем оперировать для сохранения данных о фильтрации
  // this.nameRXJS.subscrive будет подписывать участника(наш компонент) на получение данных
  // Но есть предложение создать переменную по которой компоненты смогут подписываться на обновления


  // Видимо под такое выделяют отдельный синтаксис прописывая в конце доллар как в php
  category$ = this.categoryData.asObservable(); // Применяя переменную, мы пользуемся нашим созданным сервисом(если подключим к компоненту сервис в конструктор)

  // Создаём метод сервиса, который будет обновлять данные и уведомлять всех подписчиков которые подписались на обновления
  setCategory(dataCategory: string) { // Получает строку
    this.categoryData.next(dataCategory) // Устанавливает новым значением полученную строку
  }
}
