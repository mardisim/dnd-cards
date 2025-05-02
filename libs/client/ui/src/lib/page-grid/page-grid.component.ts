import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';

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
  private document = inject(DOCUMENT);
  sidebarOpen = signal<boolean>(false);

  constructor() {
    //fromEvent(this.document, 'click').subscribe(event => this.toggleMenu(event, false));
  }

  toggleMenu(event: Event, isOpen?: boolean) {
    event.preventDefault();
    event.stopPropagation();
    this.sidebarOpen.set(isOpen !== undefined ? isOpen : !this.sidebarOpen());
  }
}
