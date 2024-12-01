import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertService } from '@dnd-cards/client/alert';
import { AuthenticationService, AuthGuard } from '@dnd-cards/client/auth';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthenticationService, AlertService, AuthGuard],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dnd-cards';
}
