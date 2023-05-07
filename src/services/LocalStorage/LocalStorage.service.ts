export class LocalStorageService {
  constructor() {}

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  hasItem(key: string): boolean {
    return !!this.getItem(key);
  }

  removeItem(key: string): void {
    this.removeItem(key);
  }
}
