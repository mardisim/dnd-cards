
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ISpellModel } from '@interfaces';
import { UISpellCardComponent } from '../spell-card/spell-card.component';

@Component({
  selector: 'ui-card-list-component',
  imports: [UISpellCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICardListComponent {
  spells = input.required<ISpellModel[]>();
  dndClass = input<string>('wizard');
}
