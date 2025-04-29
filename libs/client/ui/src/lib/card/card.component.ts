import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'ui-card',
  imports: [],
  template: `
    <div class="card-container">
      <div class="mouse-position-tracker">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="content" #content>
        <div class="front">
          <ng-content></ng-content>
        </div>
        <div class="back"></div>
      </div>
    </div>
  `,
  styleUrl: 'card.component.scss',
  host: {
    '[class]': 'cssClass()',
  },
})
export class UICardComponent {
  dndClass = input<string>('wizard');
  cssClass = computed(() => `class-${this.dndClass().toLowerCase()}`);

  constructor() {
    effect(() => console.log(this.dndClass()));
  }
}
