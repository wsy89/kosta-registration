import {Component, HostListener, Input, OnInit} from '@angular/core';
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
  backgroundColour: String = '#f1e931';
  backgroundImage: String = 'bg1.png';
  backgroundColours : String[];
  backgroundImages : String[];
  arrowOpacity: number;

  constructor(private winRef: WindowRefService) {
    this._window = winRef;
    this.minHeight = this._window.nativeWindow.innerHeight
    this.arrowOpacity = 1;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.minHeight = this._window.nativeWindow.innerHeight;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.arrowOpacity = 1 - this._window.nativeWindow.pageYOffset/ 250;
  }

  ngOnInit() {
    let index: number = 0;
    this.backgroundColours = ['#f1e931', '#f39bbc', '#00a695', '#5dbbcb', '#e75e5e', '#be7eaf'];
    this.backgroundImages = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png', 'bg5.png', 'bg6.png'];
    setInterval(() => {
      this.backgroundColour = this.backgroundColours[index];
      this.backgroundImage = this.backgroundImages[index];
      if (index == this.backgroundColours.length - 1) {
        index = 0;
      } else {
        index ++;
      }
    }, 2000)
  }

  private changeBackground(index: number) {
    this.backgroundColour = this.backgroundColours[index];
    if (index == this.backgroundColours.length - 1) {
      return 0;
    } else {
      return index ++;
    }
  }
}
