
import { Component, inject } from '@angular/core';
import { UICardListComponent } from '@dnd-cards/client-ui';
import { SpellStore } from './spell.store';

@Component({
  selector: 'lib-spell',
  standalone: true,
  imports: [UICardListComponent],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.scss',
})
export class SpellComponent {
  private spellStore = inject(SpellStore);
  spells = this.spellStore.spells;

  constructor() {
    this.spellStore.loadAllSpells();
  }
}
