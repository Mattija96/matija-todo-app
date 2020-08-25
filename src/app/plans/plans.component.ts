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

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.planItems = this.taskService.getAllTasks();
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
  }

  addProduct(): void {
    console.log(this.currentDate);
  }

  changeDate(): void {
    const date = this.currentDate.value;
    this.router.navigate([], {
      relativeTo: this.route,
      // tslint:disable-next-line:radix
      queryParams: { date: (parseInt(String(date.getMonth())) + 1) + '-' + date.getDate() + '-' + date.getFullYear()},
      queryParamsHandling: 'merge',
    });
  }

}
