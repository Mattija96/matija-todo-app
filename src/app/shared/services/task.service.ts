import {Injectable} from '@angular/core';
import {Task} from '../../models/task.model';
import {Activity} from '../../models/activity.model';

@Injectable()
export class TaskService {
  allTasks: Task[] = [
    new Task('Finish first task', 'Duis quam odio, aliquam sed accumsan et, ornare placerat velit. Nulla facilisi. Vivamus ultricies imperdiet fringilla. Pellentesque cursus vitae sapien non tempor. Sed facilisis molestie sapien, nec facilisis ante lacinia at. Integer consequat dui orci, vitae accumsan dolor maximus quis. Quisque placerat felis ac sapien mollis vehicula. Aliquam non dictum leo, vitae sodales orci. Aliquam sit amet augue et mi facilisis egestas. Nam et ante eget justo ultricies faucibus.', false, new Date(),
      new Activity('Main Activity', 'This is a main activity category', '#ffffff', '#ff5722')),
    new Task('Finish second task', 'Duis quam odio, aliquam sed accumsan et, ornare placerat velit. Nulla facilisi. Vivamus ultricies imperdiet fringilla. Pellentesque cursus vitae sapien non tempor. Sed facilisis molestie sapien, nec facilisis ante lacinia at. Integer consequat dui orci, vitae accumsan dolor maximus quis. Quisque placerat felis ac sapien mollis vehicula. Aliquam non dictum leo, vitae sodales orci. Aliquam sit amet augue et mi facilisis egestas. Nam et ante eget justo ultricies faucibus.', false, new Date(),
      new Activity('Optional', 'This is optional activity type', '#ffffff', '#0073ff')),
  ];

  getAllTasks(): Task[] {
    return this.allTasks.slice();
  }
}
