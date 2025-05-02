import { Injectable } from '@angular/core';

export interface Toast {
  message: string;
  type: ToastType;
  delay?: number;
}

export enum ToastType {
  default = '',
  success = 'bg-success text-light',
  danger = 'bg-danger text-light',
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  show(message: string, type: ToastType, delay = 5000) {
    this.toasts.push({ message, type, delay });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
}
