import {Activity} from './activity.model';

export class Task {
    public name: string;
    public description: string;
    public date: Date;
    public activityType: Activity;

    constructor(name: string, description: string, date: Date, activityType: Activity) {
      this.name = name;
      this.description = description;
      this.date = date;
      this.activityType = activityType;
    }
}
