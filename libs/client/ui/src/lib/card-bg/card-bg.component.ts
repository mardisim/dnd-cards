import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-card-bg',
  imports: [CommonModule],
  template: `<p>card-bg works!</p>`,
  styleUrl: './card-bg.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardBgComponent {}
