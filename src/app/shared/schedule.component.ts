import {Component, Input, OnInit} from '@angular/core';
import {Schedules} from '../model/schedules';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent implements OnInit {
  @Input() scheduleList : Array<Schedules>;

  ngOnInit() {

  }
}
