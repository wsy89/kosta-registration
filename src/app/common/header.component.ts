import {Component, Input, OnInit} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() subTitle;
  @Input() date;
  @Input() location;
  _window: WindowRefService;
  minHeight: number;

  constructor(private winRef: WindowRefService) {
    this._window = winRef;
    this.minHeight = this._window.nativeWindow.innerHeight;
  }

  ngOnInit() {
  }

}
