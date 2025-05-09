import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MemoryStorage } from './memory-storage.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SessionStorage implements Storage {
  private platformId = inject(PLATFORM_ID);
  private readonly storage: Storage;

  constructor() {
    if (isPlatformBrowser(this.platformId) && window?.sessionStorage) {
      this.storage = window.sessionStorage;
    } else {
      this.storage = new MemoryStorage();
    }
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
