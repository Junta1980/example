import { Component, inject, input, OnInit } from '@angular/core';
import { INode } from './palette';
import { Connector } from './connector.component';
import { FFlowModule } from '@foblex/flow';
import { ProvaService } from '../../../services/prova.service';

@Component({
  selector: 'node',
  imports: [Connector, FFlowModule],
  template: `
    <div class="connectors inputs">
      @for (connector of data().inputs; track $index) {
      <connector
        fNodeInput
        fInputConnectableSide="left"
        [fInputId]="connector + ' ' + data().id"
      />
      }
    </div>
    <div class="connectors outputs">
      @for (connector of data().outputs; track $index) {
      <connector
        fNodeOutput
        fOutputConnectableSide="right"
        [fOutputId]="connector + ' ' + data().id"
      />
      }
    </div>

    <div class="header">
      <span class="icon">{{ data().icon }}</span>
      <span>{{ data().name }}</span>
    </div>

    <div class="description">{{ data().shortDescription }}</div>
  `,
  styles: `
  :host {
  position: relative;
  background: #ffffff;
  border-radius: 6px;
  padding: 20px 24px;
  min-width: 180px;
  max-width: 180px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: default;

  &:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  }

  &.f-selected {
    outline: 2px solid #4b91f1;
    outline-offset: -2px;
    box-shadow: 0 0 0 4px rgba(75, 145, 241, 0.12);
  }

  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 15px;
  }

  .icon {
    font-family: 'Material Symbols Outlined';
    font-size: 20px;
    background: linear-gradient(to right, #4b91f1, #5c2ae8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: 13px;
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: fit-content;
  }

  .connectors {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1;

    &.inputs {
      left: -6px;
      top: 8px;
      bottom: 8px;
      justify-content: start;
    }

    &.outputs {
      right: -6px;
      top: 8px;
      bottom: 8px;
      justify-content: end;
    }
  }
}`,
})
export class NodeComponent{
  public provaService = inject(ProvaService);
  public data = input.required<INode>();

  constructor() {
    console.log('node' , this.provaService.getProva());
  }
}
