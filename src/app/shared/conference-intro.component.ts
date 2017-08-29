import {Component, Input} from '@angular/core';
import {Introduction} from '../model/introduction';

@Component({
  selector: 'conference-intro',
  templateUrl: 'conference-intro.html'
})
export class ConferenceIntroComponent {
  @Input() introductionList : Array<Introduction>;
  shouldShowList: boolean = false;
  currentView: number = 0;

  goTo(location: string): void {
    window.location.hash = location;
  }

  toggleList(){
    this.shouldShowList = !this.shouldShowList;
  }

  viewTab(viewNum: number){
    this.currentView = viewNum;
    this.shouldShowList = false;
  }
}
