import { LocalStorage } from './local-storage.class';
import { Inject, Injectable } from '@angular/core';
import { COOKIE_IN_INCOGNITO } from '../tokens/storage.tokens';

@Injectable()
export class BrowserLocalStorage implements LocalStorage{
  private readonly storage: Storage;

  constructor(@Inject(COOKIE_IN_INCOGNITO) private cookieInIncognito: boolean, private cookieStorage: CookieS){

  }

}
