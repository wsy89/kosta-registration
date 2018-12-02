import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'about-kosta',
  templateUrl: 'about-kosta-modal.html',
})
export class AboutKostaModalComponent {

  private _window: Window;

  constructor(private winRef : WindowRefService) {
    this._window = winRef.nativeWindow;
  }
}
