import {Input, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {WindowRefService} from '../service/window-ref.service';

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemComponent {
  @Input() name: String;
  @Input() current: String;

  isActive(): boolean {
    return this.name.toLowerCase() === this.current.toLowerCase();
  }


}
