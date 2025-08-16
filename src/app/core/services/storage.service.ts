import { inject, Injectable, InjectionToken, PLATFORM_ID } from "@angular/core";

export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'window local storage', // Only when APP open in Browser
  {
    providedIn: 'root',
    factory: () => {
      return inject(PLATFORM_ID) === 'browser'
        ? window.localStorage
        : ({} as Storage)
    }
  }
)

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  storage = inject(LOCAL_STORAGE)

  constructor() {
    this.storage.setItem('userIsRegister', )
  }

}
