import {Input, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent implements OnInit {
  @ViewChild('menuHeader') menuHeader;
  @Input() type: String;
  registrationUrl: String;
  
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
    this.registrationUrl = "http://www.google.com";
    if(this.type === "kosta"){
      this.registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe7aZPQTF7QtZVb6Y4g4NLw9QjA1WFcrJvu56r9KmVJtqdRPQ/viewform?usp=sf_link";
    }
  }
}
