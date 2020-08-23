import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Activity} from '../../models/activity.model';
import {ActivityService} from '../../shared/services/activity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  fontColor: any;
  backgroundColor: any;
  constructor(private activityService: ActivityService, private router: Router) { }

  ngOnInit(): void {
    this.fontColor = '#ffffff';
    this.backgroundColor = '#000000';
  }

  submitData(form: NgForm): void {
    const formValues = form.value;
    const activityObject = new Activity(formValues.name, formValues.description, this.fontColor, this.backgroundColor);
    this.activityService.addActivity(activityObject);
    this.router.navigate(['/activities']);
  }

}
