import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {

  @Input() title;
  @Input() subTitle;
  @Input() date;
  @Input() location;

  ngOnInit() {

  }
}
