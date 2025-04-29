import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  description = computed(() => {
    return this.safeHtml.transform(this.spell()?.description as string);
  });
  level = computed(() => {
    return Number(this.spell().level) > 0 ? this.spell().level + '. Level' : 'Cantrip';
  });
  school = computed(() => {
    return this.spell().school.name;
  });
  dndClass = computed(() => {
    const dndClasses = this.spell().dndClasses;
    return dndClasses.length > 0 ? dndClasses[0].name : 'wizard';
  });
}
