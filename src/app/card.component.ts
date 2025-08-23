import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <h3><ng-content select="[card-title]"></ng-content></h3>
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
})
export class CardComponent {
}
