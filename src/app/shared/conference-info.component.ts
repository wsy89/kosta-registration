import {Component, Input, OnInit} from '@angular/core';
import {Information} from '../model/information';

@Component({
  selector: 'conference-info',
  templateUrl: 'conference-info.html'
})
export class ConferenceInfoComponent implements OnInit {
  @Input() information : Information;
  @Input() registrationUrl: String;
  @Input() howToOfflineLink: String;
  ngOnInit() {

  }
}
