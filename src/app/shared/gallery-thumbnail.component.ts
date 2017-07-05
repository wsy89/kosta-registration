import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Image} from '../model/image';
import {GalleryModalComponent} from './gallery-modal.component';

@Component({
  selector: 'gallery-thumbnail',
  templateUrl: 'gallery-thumbnail.html'
})
export class GalleryThumbnailComponent {
  @Input() image: Image;
  @Input() index: number;
  @ViewChild(GalleryModalComponent) galleryModal: GalleryModalComponent;

}
