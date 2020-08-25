import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from '../shared/services/task.service';
import {Task} from '../models/task.model';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  currentDate: FormControl = new FormControl(new Date());
  planItems: Task[];
  datedItems: Task[];

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
  }

  addProduct(): void {
    console.log(this.currentDate);
  }

  changeDate(): void {
    const date = this.currentDate.value;
    this.filterTasks(date);
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
       if(compareDate === setDate) {
         this.datedItems.push(this.planItems[i]);
       }
    }
  }

}
