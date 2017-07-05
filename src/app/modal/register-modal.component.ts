import {Component} from '@angular/core';

@Component({
  selector: 'register-modal',
  templateUrl: 'register-modal.html'
})
export class RegisterModalComponent {
  show: boolean;

  constructor() {
    this.show = false;
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
