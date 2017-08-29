import {Input, Component, ElementRef, HostListener, OnInit, ViewChild, ContentChildren, QueryList} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';
import {MenuItemComponent} from './menu-item.component';

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent implements OnInit {

  @ViewChild('menuHeader') menuHeader;

  @ContentChildren(MenuItemComponent) menuItem: QueryList<MenuItemComponent>;

  @Input() type: String;
  @Input() current: String;
  _window: Window;
  stickMenu: boolean = false;
  isOpen: boolean = false;
  registrationUrl: String;
  routerLink: String;
  labelLink: String;
  menuItems: Array<String>;

  constructor(private winRef: WindowRefService) {
    this._window = winRef.nativeWindow;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let menuTop = this.menuHeader.nativeElement.offsetTop;
    let windowTop = this._window.pageYOffset;

    this.stickMenu = windowTop >= menuTop;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    console.log("Width: " + event.target.innerWidth);
    console.log("Height: " + event.target.innerHeight);
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
    this.registrationUrl = "http://www.google.com";
    this.routerLink = "/kosta";
    this.labelLink = "KOSTA";

    if(this.isKosta()){
      this.registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe7aZPQTF7QtZVb6Y4g4NLw9QjA1WFcrJvu56r9KmVJtqdRPQ/viewform?usp=sf_link";
      this.routerLink = "/youth-kosta";
      this.labelLink = "Y.KOSTA";
    }
    this.menuItems = new Array<String>();
    this.menuItems.push('About');
    this.menuItems.push('Speakers');
    this.menuItems.push('Schedule');
    this.menuItems.push('Info');
    this.menuItems.push('Gallery');
    this.menuItems.push('Contact');
  }

  isKosta(): boolean {
    return this.type === "kosta";
  }
}
