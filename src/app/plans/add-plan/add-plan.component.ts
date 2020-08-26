import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {ActivityService} from '../../shared/services/activity.service';
import {FormControl} from '@angular/forms';
import {Task} from '../../models/task.model';
import {TaskService} from '../../shared/services/task.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {
  @Input() currentDate: FormControl;
  @Output() taskState: EventEmitter<void> = new EventEmitter<void>();
  types: Activity[];
  activityType: any;

  constructor(private activityService: ActivityService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.types = this.activityService.getActivities();
    this.activityService.activitySubjector.subscribe(response => {
      this.types = response;
    });
  }

  addTask(form): void {
    const formValues = form.value;
    const newTask = new Task(formValues.name, formValues.description, false, this.currentDate.value, formValues.activityType);
    this.taskService.addTask(newTask);
    this.taskState.emit();
  }

}
