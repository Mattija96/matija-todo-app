import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() currentItem: Task;
  @Output() itemEmitter: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() itemChecked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(): void {
    this.itemEmitter.emit(this.currentItem);
  }

  itemStatusChanged(): void {
    this.itemChecked.emit(null);
  }

}
