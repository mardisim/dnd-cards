import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DnDClassStore } from './dnd-class.store';

@Component({
  selector: 'lib-dnd-card',
  imports: [CommonModule],
  templateUrl: 'dnd-class.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DnDClassComponent implements OnInit {
  dndClassStore = inject(DnDClassStore);
  dndClasses = this.dndClassStore.dndClasses;

  ngOnInit() {
    this.dndClassStore.loadAllDnDClasses();
  }
}
