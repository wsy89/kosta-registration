import {Component, Input, OnInit} from "@angular/core";
import {Speaker} from "../model/speaker";

@Component({
  selector: "speakers",
  templateUrl: "./app/shared/speakers.html"
})
export class SpeakersComponent implements OnInit {
  @Input() speakerList : Array<Speaker>;

  ngOnInit() {

  }
}
