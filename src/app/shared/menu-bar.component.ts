import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent implements OnInit {

  @ViewChild('menuHeader') menuHeader;

  @Input() type: String;
  @Input() current: String;
  @Input() registrationUrl: String;
  _window: Window;
  stickMenu: boolean = false;
  isOpen: boolean = false;
  routerLink: String;
  labelLink: String;
  menuItems: Array<String>;
  logoName: String;

  constructor(private winRef: WindowRefService) {
    this._window = winRef.nativeWindow;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let menuTop = this.menuHeader.nativeElement.offsetTop;
    let windowTop = this._window.pageYOffset;

    this.stickMenu = windowTop >= menuTop;
  }

  toggleState() { // click handler
    let bool = this.isOpen;
    this.isOpen = bool === false ? true : false;
  }

  isActive(name: String): boolean {
    if(name !== undefined && this.current !== undefined)
      return name.toLowerCase() === this.current.toLowerCase();

    return false;
  }

  ngOnInit() {
    this.routerLink = "/kosta";
    this.labelLink = "KOSTA";
    this.logoName = "youth_logo.png";

    if(this.isKosta()){
      this.routerLink = "/youth-kosta";
      this.labelLink = "Y.KOSTA";
      this.logoName = "kosta_logo.png";
    }
    this.menuItems = new Array<String>();
    this.menuItems.push('About');
    this.menuItems.push('Speakers');
    this.menuItems.push('Schedule');
    this.menuItems.push('Info');
    this.menuItems.push('Venue');
    this.menuItems.push('Gallery');
  }

  isKosta(): boolean {
    return this.type === "kosta";
  }
}
