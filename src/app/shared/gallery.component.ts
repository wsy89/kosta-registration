import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../model/image';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})
export class GalleryComponent implements OnInit {
  @Input() imageList: Array<Image>;
  @Input() isYouth: boolean;
  ngOnInit() {

  }
}
