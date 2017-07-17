import {Component, Input, OnInit} from '@angular/core';
import {Introduction} from '../model/introduction';

@Component({
  selector: 'conference-intro',
  templateUrl: 'conference-intro.html'
})
export class ConferenceIntroComponent {
  @Input() introductionList : Array<Introduction>;

  goTo(location: string): void {
    window.location.hash = location;
  }
}
