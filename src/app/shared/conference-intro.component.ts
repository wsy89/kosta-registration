import {Component, Input, OnInit} from "@angular/core";
import {Introduction} from "../model/introduction";

@Component({
  selector: "conference-intro",
  templateUrl: "./app/shared/conference-intro.html"
})
export class ConferenceIntroComponent implements OnInit {
  @Input() introductionList : Array<Introduction>;

  ngOnInit() {

  }

  goTo(location: string): void {
    window.location.hash = location;
  }
}
