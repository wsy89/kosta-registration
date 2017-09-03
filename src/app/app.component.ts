import {Component, OnInit} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent {

  emailAddress: String = "kosta@gmail.com";

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url.indexOf("youth") !== -1){
          this.emailAddress = "youth.kosta@gmail.com";
        } else {
          this.emailAddress = "kosta@gmail.com";
        }
      } 
    });
  }
}
