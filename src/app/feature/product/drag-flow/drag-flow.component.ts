import { Component, inject, signal } from '@angular/core';
import {
  FCreateConnectionEvent,
  FCreateNodeEvent,
  FFlowModule,
} from '@foblex/flow';
import {
  DATA,
  generateGuid,
  IConnection,
  INode,
  IStorageNode,
} from './palette';
import { NodeComponent } from './node.component';
import { ProvaService } from '../../../services/prova.service';

@Component({
  selector: 'app-drag-flow',
  imports: [FFlowModule, NodeComponent],
  providers: [ProvaService],
  template: `
    <div style="display: flex; gap: 20px; padding: 20px;">
      <div style="width: 20%;">
        @for (node of nodes; track node.name) {
        <div
          class="palette-node"
          fExternalItem
          [fPreviewMatchSize]="true"
          [fData]="node"
        >
          <span class="icon material-symbols-outlined">{{ node.icon }}</span>
          <span>{{ node.name }}</span>
        </div>

        }
      </div>
      <div style="flex-grow: 1;">
        <f-flow
          fDraggable
          (fCreateNode)="createNode($event)"
          (fCreateConnection)="createConnection($event)"
        >
          <f-canvas
            >å
            <f-connection-for-create></f-connection-for-create>
            @for (connection of connections(); track connection.id) {
            <f-connection
              [fConnectionId]="connection.id"
              [fOutputId]="connection.from"
              [fInputId]="connection.to"
            />
            } @for (node of nodesC(); track node.id) {
            <node
              fNode
              fDragHandle
              [fNodePosition]="node.position"
              [fNodeId]="node.id"
              [data]="node"
            >
            </node>
            }
          </f-canvas>
        </f-flow>
      </div>
    </div>
  `,
  styles: `
  ::ng-deep .palette-node {
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 5px;
  background-color: white;

  .icon {
    font-family: 'Material Symbols Outlined';
    font-size: 20px;
    background: linear-gradient(to right, #4b91f1, #5c2ae8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
  `,
})
export class DragFlowComponent {
  protected nodes = DATA;
  protected nodesC = signal<INode[]>([]);
  protected connections = signal<IConnection[]>([]);
  public provaService = inject(ProvaService);

  protected createNode(event: FCreateNodeEvent): void {
    this.nodesC.update((nodes) => {
      const newNode: INode = {
        ...event.data,
        id: generateGuid(),
        position: event.rect || { x: 0, y: 0 },
      };
      return [...nodes, newNode];
    });
  }

  protected createConnection(event: FCreateConnectionEvent): void {
    console.log('createConnection', event);
    if (!event.fInputId) return;

    this.connections.update((connections) => [
      ...connections,
      {
        id: generateGuid(),
        from: event.fOutputId,
        to: event.fInputId || '',
      },
    ]);
  }
}
