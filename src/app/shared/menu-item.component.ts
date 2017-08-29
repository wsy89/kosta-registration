import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemComponent {
  @Input() name: String;
  @Input() current: String;

  isActive(): boolean {
    if(this.name !== undefined && this.current !== undefined)
      return this.name.toLowerCase() === this.current.toLowerCase();

    return false;
  }
}
