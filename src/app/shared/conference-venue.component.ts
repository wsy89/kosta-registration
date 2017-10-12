import {Component, Input, OnInit} from '@angular/core';
import {Information} from '../model/information';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'conference-venue',
  templateUrl: 'conference-venue.html'
})
export class ConferenceVenueComponent implements OnInit {
  @Input() information : Information;
  @Input() mapUrl: string;
  url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }
}
