import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { debounceTime, map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'ui-page-grid',
  templateUrl: './page-grid.component.html',
  styleUrl: './page-grid.component.css',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, AsyncPipe],
})
export class UIPageGridComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    debounceTime(50),
    map(result => result.matches),
    shareReplay(),
  );
}
