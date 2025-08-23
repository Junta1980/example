import { Component, ElementRef, ViewChild } from '@angular/core';
import Drawflow from 'drawflow';

@Component({
  selector: 'app-drag-flow',
  template: `<div #drawflowContainer class="drawflow-container"></div>`,
  styles: ``
})
export class DragFlowComponent {
   @ViewChild('drawflowContainer', { static: true }) drawflowContainer!: ElementRef;

   
}
