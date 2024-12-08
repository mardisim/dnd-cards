import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from './spell.service';
import { ISpellModel } from '@interfaces';
import { SpellCardComponent } from '@dnd-cards/client/ui';

@Component({
  selector: 'lib-spell',
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
