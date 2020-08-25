import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() currentItem: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
