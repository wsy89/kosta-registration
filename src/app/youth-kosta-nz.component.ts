import {Component, OnInit} from "@angular/core";
import {Image} from './model/image';
import {Schedules} from './model/schedules';
import {Speaker} from './model/speaker';
import {Introduction} from './model/introduction';

@Component({
  selector: "youth-kosta",
  templateUrl: "youth-kosta-nz.html"
})
export class YouthKostaComponent implements OnInit {
  title: String;
  subTitle: String;
  location: String;
  datetime: String;
  kostaIntro: Array<Introduction>;
  speakers: Array<Speaker>;
  schedules: Array<Schedules>;
  address: String;
  email: String;
  phoneNumber: String;
  galleryImages: Array<Image>;

  constructor() {
    this.kostaIntro = new Array<Introduction>();
    this.speakers = new Array<Speaker>();
    this.schedules = new Array<Schedules>();
    this.galleryImages = new Array<Image>();
  }

  ngOnInit() {
    console.log("Application component initialized ...");
  }
}
