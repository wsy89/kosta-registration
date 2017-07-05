import {ScheduleItem} from "./scheduleItem";
export class Schedules {
  date: String;
  schedules: Array<ScheduleItem>;

  constructor(date: String, schedules: Array<ScheduleItem>) {
    this.date = date;
    this.schedules = schedules;
  }
}
