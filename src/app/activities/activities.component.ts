import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Activity} from '../models/activity.model';
import {ActivityService} from '../shared/services/activity.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  currentActivities: Activity[];
  activitySubscription: Subscription;
  tableDataSource = new MatTableDataSource<Activity>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'description', 'fontColor', 'backgroundColor'];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.currentActivities = this.activityService.getActivities();
    this.bindToTable(this.currentActivities);
    this.activitySubscription = this.activityService.activitySubjector.subscribe(activities => {
      this.currentActivities = activities;
      this.bindToTable(activities);
    });
  }

  bindToTable(item): void {
    this.tableDataSource = new MatTableDataSource<Activity>(item);
    this.tableDataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.activitySubscription.unsubscribe();
  }

}
