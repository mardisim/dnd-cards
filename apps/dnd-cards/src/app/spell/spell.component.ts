import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '@dnd-cards/client/spell';
import { ISpellModel } from '@dnd-cards/shared/interfaces';
import { SpellCardComponent } from '@dnd-cards/client/ui';

@Component({
  selector: 'app-spell',
  standalone: true,
  imports: [CommonModule, SpellCardComponent],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.scss',
})
export class SpellComponent implements OnInit {
  private spellService = inject(SpellService);
  spells: ISpellModel[] = [];

  ngOnInit() {
    this.spellService.getAllSpells().subscribe(spells => {
      this.spells = spells;
    });
  }
}
