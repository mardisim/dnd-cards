import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from './alert.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-alert',
  imports: [CommonModule],
  templateUrl: 'alert.component.html',
  standalone: true,
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  message: any;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
