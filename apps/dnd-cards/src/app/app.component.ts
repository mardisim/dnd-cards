import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastService, UIPageGridComponent, UIToastsContainerComponent } from '@dnd-cards/client-ui';

@Component({
  imports: [RouterModule, UIPageGridComponent, UIToastsContainerComponent],
  providers: [ToastService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
