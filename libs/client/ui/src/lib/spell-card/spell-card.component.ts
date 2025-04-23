import { Component, computed, inject, input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { SafeHtmlPipe } from '@dnd-cards/client/utils';
import { ISpellModel } from '@interfaces';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'lib-ui-spell-card',
  standalone: true,
  imports: [CommonModule, CardComponent, JsonPipe],
  providers: [SafeHtmlPipe],
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.scss',
})
export class SpellCardComponent {
  private safeHtml = inject(SafeHtmlPipe);

  spell = input.required<ISpellModel>();
  description = computed(() => {
    return this.safeHtml.transform(this.spell()?.description as string);
  });
  level = computed(() => {
    return Number(this.spell().level) > 0 ? this.spell().level + '. Level' : 'Cantrip';
  });
  school = computed(() => {
    return this.spell().school.name;
  });
}
