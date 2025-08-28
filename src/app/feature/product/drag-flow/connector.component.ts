import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FFlowModule } from '@foblex/flow';

@Component({
  selector: 'connector',
  imports: [FFlowModule],
  template: '',
   styles: `
   :host {
  position: relative;
  width: 12px;
  height: 12px;
  min-height: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;

  &.connected {
    background-color: #4b91f1;
    box-shadow: 0 0 0 2px rgba(75, 145, 241, 0.2);
  }

  &:hover {
    transform: scale(1.4);
    box-shadow: 0 0 6px rgba(75, 145, 241, 0.4);
  }
}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class Connector {}