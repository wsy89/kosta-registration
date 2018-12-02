import {Input, Component} from '@angular/core';

@Component({
  selector: 'sns-list',
  templateUrl: 'sns-list.html'
})
export class SnsListComponent {
  @Input() alignRight: boolean = false;  
}
