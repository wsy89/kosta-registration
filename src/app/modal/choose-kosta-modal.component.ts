import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'choose-kosta',
  templateUrl: 'choose-kosta-modal.html',
})
export class ChooseKostaModalComponent {

  private _window: Window;

  constructor(private winRef : WindowRefService) {
    this._window = winRef.nativeWindow;
  }
}
