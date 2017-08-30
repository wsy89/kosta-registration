import {Component, Input, OnInit} from '@angular/core';
import {Schedules} from '../model/schedules';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent implements OnInit {
  @Input() scheduleList : Array<Schedules>;
  shouldShowList: boolean = false;
  currentView: number = 0;
  
  ngOnInit() {

  }

  toggleList(){
    this.shouldShowList = !this.shouldShowList;
  }

  viewTab(viewNum: number){
    this.currentView = viewNum;
    this.shouldShowList = false;
  }
}
