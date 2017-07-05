import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent implements OnInit {
  @Input() address : String;
  @Input() email : String;
  @Input() phone : String;

  ngOnInit() {

  }
}
