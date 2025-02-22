import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = DummyTasks;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(taskId: string) {
    console.log({ taskId });
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
