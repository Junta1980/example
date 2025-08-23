import { Component } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-drag-drop',
  imports: [DragDropModule, CommonModule],
  template: `
    <h3>Reorderable list</h3>
    <div
      cdkDropList
      [cdkDropListData]="todo"
      (cdkDropListDropped)="dropTodo($event)"
      class="list"
    >
      <div class="item" *ngFor="let t of todo" cdkDrag>
        <span class="handle" cdkDragHandle>⠿</span> {{ t }}
      </div>
    </div>
    <h3>Kanban-style</h3>
    <div class="board">
      <div class="column">
        <h4>Todo</h4>
        <div
          cdkDropList
          [cdkDropListData]="todo"
          [cdkDropListConnectedTo]="['doneList']"
          (cdkDropListDropped)="dropBoth($event)"
          class="list"
          id="todoList"
        >
          <div class="item" *ngFor="let t of todo" cdkDrag>
            <span class="handle" cdkDragHandle>⠿</span> {{ t }}
          </div>
        </div>
      </div>
      <div class="column">
        <h4>Done</h4>
        <div
          cdkDropList
          [cdkDropListData]="done"
          [cdkDropListConnectedTo]="['todoList']"
          (cdkDropListDropped)="dropBoth($event)"
          class="list"
          id="doneList"
        >
          <div class="item" *ngFor="let d of done" cdkDrag>
            <span class="handle" cdkDragHandle>⠿</span> {{ d }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class DragDropComponent {
  todo = ['Write spec', 'Build UI', 'Wire API', 'Tests'];
  done = ['Deploy'];
  dropTodo(event: CdkDragDrop<string[]>) {
    console.log(
      'dropTodo',
      event.previousIndex,
      event.currentIndex,
      event.previousContainer,
      event.container
    );
  }

  dropBoth(event: CdkDragDrop<string[]>) {
    console.log(
      'dropTodo',
      event.previousIndex,
      event.currentIndex,
      event.previousContainer,
      event.container
    );
  }
}
