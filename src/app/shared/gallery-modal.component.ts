import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../model/image';

@Component({
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.html'
})
export class GalleryModalComponent {
  @Input() image: Image;
  @Input() index: number;
  show: boolean;

  constructor() {
    this.show = false;
  }

  open() {
    this.show = true;
    console.log("open! " + this.index);
  }

  close() {
    this.show = false;
    console.log("close! " + this.index);
  }
}
