import {Activity} from './activity.model';

export class Task {
    public name: string;
    public description: string;
    public date: Date;
    public isDone: boolean;
    public activityType: Activity;

    constructor(name: string, description: string, isDone: boolean, date: Date, activityType: Activity) {
      this.name = name;
      this.description = description;
      this.isDone = isDone;
      this.date = date;
      this.activityType = activityType;
    }
}
