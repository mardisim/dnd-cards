import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DnDClassService } from './dnd-class.service';
import { IDndClassModel } from '@interfaces';

@Component({
  selector: 'lib-dnd-card',
  imports: [CommonModule],
  template: `<p>DndClass works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DndClassComponent implements OnInit {
  private dndClassService = inject(DnDClassService);
  dndClasses: IDndClassModel[] = [];

  ngOnInit() {
    this.dndClassService.getAllDnDClasses().subscribe((dndClasses: IDndClassModel[]) => {
      this.dndClasses = dndClasses;
    });
  }
}
