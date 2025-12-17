import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UICardListComponent } from '@dnd-cards/client-ui';
import { IDndClassModel as IDndClassesModel } from '@interfaces';
import { DnDClassStore } from './dnd-class.store';

@Component({
  selector: 'lib-dnd-card',
  imports: [CommonModule, UICardListComponent],
  templateUrl: 'dnd-class.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DnDClassComponent {
  dndClassStore = inject(DnDClassStore);
  dndClasses = this.dndClassStore.dndClasses;
  spells = this.dndClassStore.spells;

  dndClass!: string;

  constructor() {
    this.dndClassStore.loadAllDnDClasses();
  }

  updateDnDClassesList(event: Event) {
    const dndClassesID = (event.target as HTMLInputElement).value;
    const currentClass = this.dndClasses().find((dndClasses: IDndClassesModel) => dndClasses.id === dndClassesID);
    if (currentClass) {
      this.dndClass = currentClass.name.toLowerCase();
    }

    this.dndClassStore.loadDnDClass(dndClassesID);
  }
}
