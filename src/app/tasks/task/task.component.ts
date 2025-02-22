import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasks.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter<string>();

  onTaskCompleted() {
    console.log('clicked');

    this.complete.emit(this.task.id);
  }
}
