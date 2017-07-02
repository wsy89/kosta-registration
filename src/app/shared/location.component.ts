import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "location",
  templateUrl: "./app/shared/location.html"
})
export class LocationComponent implements OnInit {
  @Input() address : String;
  @Input() email : String;
  @Input() phone : String;

  ngOnInit() {

  }
}
