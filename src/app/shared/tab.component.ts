import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: "./app/shared/tab.html"
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
