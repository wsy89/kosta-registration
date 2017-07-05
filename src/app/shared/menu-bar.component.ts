import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent implements OnInit {
  @ViewChild('menuHeader') menuHeader;
  private _window: Window;
  private stickMenu: boolean = false;

  constructor(private winRef: WindowRefService) {
    this._window = winRef.nativeWindow;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    let menuTop = this.menuHeader.nativeElement.offsetTop;
    let windowTop = this._window.pageYOffset;

    this.stickMenu = windowTop >= menuTop;
  }

  ngOnInit() {

  }
}
