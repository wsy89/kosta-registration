import {Component, Input, OnInit} from '@angular/core';
import {Information} from '../model/information';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'conference-info',
  templateUrl: 'conference-info.html'
})
export class ConferenceInfoComponent {
  @Input() information : Information;
  @Input() registrationUrl: String;
  @Input() howToOfflineLink: String;
}
