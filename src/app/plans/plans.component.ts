import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../shared/services/task.service';
import {Task} from '../models/task.model';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  currentDate: FormControl = new FormControl(new Date());
  planItems: Task[];
  datedItems: Task[];
  selectedTask: Task;
  completion = 0;
  taskSubscription: Subscription;
  isEditing = false;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.date) {
      const paramDate = this.route.snapshot.queryParams.date;
      this.currentDate = new FormControl(new Date(this.route.snapshot.queryParams.date));
    }
    else {
      const today = new Date();
      this.currentDate = new FormControl(today);
      this.router.navigate([], {
        relativeTo: this.route,
        // tslint:disable-next-line:radix
        queryParams: { date: (parseInt(String(today.getMonth())) + 1) + '-' + today.getDate() + '-' + today.getFullYear()},
        queryParamsHandling: 'merge',
      });
    }
    this.planItems = this.taskService.getAllTasks();
    this.filterTasks(this.currentDate.value);
    this.calculateCompletion();
    this.taskService.taskEmitter.subscribe(response => {
      this.planItems = response;
      this.filterTasks(this.currentDate.value);
      this.calculateCompletion();
    });
  }

  addProduct(): void {
    this.isEditing = !this.isEditing;
  }

  changeDate(): void {
    const date = this.currentDate.value;
    this.filterTasks(date);
    this.calculateCompletion();
    this.selectedTask = null;
    this.router.navigate([], {
      relativeTo: this.route,
      // tslint:disable-next-line:radix
      queryParams: { date: (parseInt(String(date.getMonth())) + 1) + '-' + date.getDate() + '-' + date.getFullYear()},
      queryParamsHandling: 'merge',
    });
  }

  filterTasks(date): void {
    this.datedItems = [];
    // tslint:disable-next-line:radix
    const compareDate = (parseInt(String(date.getMonth())) + 1) + '-' + date.getDate() + '-' + date.getFullYear();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.planItems.length; i++) {
      // tslint:disable-next-line:max-line-length radix
       const setDate = (parseInt(String(this.planItems[i].date.getMonth())) + 1) + '-' + this.planItems[i].date.getDate() + '-' + this.planItems[i].date.getFullYear();
       if (compareDate === setDate) {
         this.datedItems.push(this.planItems[i]);
       }
    }
  }

  calculateCompletion(): void {
    this.completion = 0;
    if (this.datedItems && this.datedItems.length > 0) {
      let counter = 0;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.datedItems.length; i++) {
        if (this.datedItems[i].isDone) {
          counter++;
        }
      }
      this.completion = counter / this.datedItems.length * 100;
    }
  }

  viewTask(task): void {
    this.selectedTask = task;
  }

  getSelected(itemEvent): void {
    this.selectedTask = itemEvent;
  }

  removeForm(): void {
    this.isEditing = false;
  }

}
