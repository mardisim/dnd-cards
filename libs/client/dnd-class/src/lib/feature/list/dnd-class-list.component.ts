import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UICardListComponent } from '@dnd-cards/client-ui';
import { IDndClassModel } from '@interfaces';
import { DnDClassStore } from '../../data-access/dnd-class.store';

@Component({
  selector: 'lib-dnd-card',
  imports: [CommonModule, UICardListComponent],
  templateUrl: 'dnd-class-list.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDnDClassListComponent {
  dndClassStore = inject(DnDClassStore);
  dndClasses = this.dndClassStore.dndClasses;
  spells = this.dndClassStore.spells;

  dndClass!: string;

  constructor() {
    this.dndClassStore.loadAllDnDClasses();
  }

  updateDnDClassList(event: Event) {
    const dndClassID = (event.target as HTMLInputElement).value;
    const currentClass = this.dndClasses().find((dndClass: IDndClassModel) => dndClass.id === dndClassID);
    if (currentClass) {
      this.dndClass = currentClass.name.toLowerCase();
    }

    this.dndClassStore.loadDnDClass(dndClassID);
  }
}
