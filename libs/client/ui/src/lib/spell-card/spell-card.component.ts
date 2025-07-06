import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { SafeHtmlPipe } from '@dnd-cards/client-utils';
import { ISpellModel } from '@interfaces';
import { UICardComponent } from '../card/card.component';

@Component({
  selector: 'ui-spell-card',
  standalone: true,
  imports: [CommonModule, UICardComponent],
  providers: [SafeHtmlPipe],
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.scss',
})
export class UISpellCardComponent {
  private safeHtml = inject(SafeHtmlPipe);

  spell = input.required<ISpellModel>();
  dndClass = input<string>('wizard');

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
