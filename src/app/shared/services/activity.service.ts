import {Injectable} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Subject} from 'rxjs';

@Injectable()
export class ActivityService {
  allActivities: Activity[] = [
    new Activity('Main Activity', 'This is a main activity category', '#ffffff', '#ff5722'),
    new Activity('Optional', 'This is optional activity type', '#ffffff', '#0073ff')
  ];
  activitySubjector =  new Subject<Activity[]>();
  constructor() {}
  getActivities(): Activity[] {
    return this.allActivities.slice();
  }

  addActivity(activity: Activity): void {
    this.allActivities.push(activity);
    this.activitySubjector.next(this.allActivities.slice());
  }

}
