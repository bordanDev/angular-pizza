import { AbstractStorage } from './abstract-storage.class';

export abstract class CookieStorage extends AbstractStorage {
  abstract setItem(key: string, value: string, options?: object): void;
}
