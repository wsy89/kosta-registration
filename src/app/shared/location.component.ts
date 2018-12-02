import {Component, Input, OnInit, HostListener} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'location',
  templateUrl: 'location.html'
})
export class LocationComponent implements OnInit {

  imgWidth: number;

  constructor(private _winRef: WindowRefService) {
    this.imgWidth = _winRef.nativeWindow.innerWidth;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.imgWidth = this._winRef.nativeWindow.innerWidth;
  }

  @Input() address : String;
  @Input() email : String;
  @Input() phone : String;

  ngOnInit() {

  }
}
