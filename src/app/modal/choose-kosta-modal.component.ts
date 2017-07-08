import {Component} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'choose-kosta',
  templateUrl: 'choose-kosta-modal.html',
})
export class ChooseKostaModalComponent {
  private _window: Window;
  private topPosition: number;

  constructor(private winRef : WindowRefService) {
    this._window = winRef.nativeWindow;
    this.topPosition = this._window.innerHeight / 2;
  }
}
