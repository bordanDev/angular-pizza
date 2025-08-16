export abstract class AbstractStorage implements Storage {
  abstract readonly length: number;
  abstract clear(): void;
  abstract getItem(key: string): string | null;
  abstract key(index: number): string | null;
  abstract removeItem(key: string): void;
  abstract setItem(key: string, value: string): void
}
