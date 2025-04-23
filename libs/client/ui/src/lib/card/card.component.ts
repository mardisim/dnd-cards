import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'lib-ui-card',
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
export class CardComponent {
  dndClass = input.required<string>();
  cssClass = computed(() => `class-${this.dndClass().toLowerCase()}`);

  constructor() {
    effect(() => console.log(this.dndClass()));
  }
}
