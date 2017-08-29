import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'choose-kosta',
  templateUrl: 'choose-kosta-modal.html',
})
export class ChooseKostaModalComponent implements AfterViewInit{

  @ViewChild('chooseModal') chooseModal: ElementRef;
  private _window: Window;
  topPosition: number = 200;

  constructor(private winRef : WindowRefService) {
    this._window = winRef.nativeWindow;
  }

  ngAfterViewInit(){
    // var modalHeight = this.chooseModal.nativeElement.offsetHeight;
    // this.topPosition = (this._window.innerHeight - modalHeight) / 2;

  }
}
