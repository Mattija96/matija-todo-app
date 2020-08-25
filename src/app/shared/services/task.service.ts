import {Injectable} from '@angular/core';
import {Task} from '../../models/task.model';
import {Activity} from '../../models/activity.model';

@Injectable()
export class TaskService {
  allTasks: Task[] = [
    new Task('Finish first task', 'This is example first task', false, new Date(),
      new Activity('Main Activity', 'This is a main activity category', '#ffffff', '#ff5722')),
    new Task('Finish second task', 'This is example second task', false, new Date(),
      new Activity('Optional', 'This is optional activity type', '#ffffff', '#0073ff')),
  ];

  getAllTasks(): Task[] {
    return this.allTasks.slice();
  }
}
