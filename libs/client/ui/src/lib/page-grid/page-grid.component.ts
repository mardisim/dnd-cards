import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'ui-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrl: './page-grid.component.scss',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  host: {
    class: 'd-grid h-100',
    '[class.sidebar-open]': 'sidebarOpen()',
  },
})
export class UIPageGridComponent {
  sidebarOpen = signal<boolean>(false);

  toggleMenu(isOpen?: boolean) {
    this.sidebarOpen.set(isOpen !== undefined ? isOpen : !this.sidebarOpen());
  }
}
