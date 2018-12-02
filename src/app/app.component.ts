import {Component, OnInit} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent {

  emailAddress: String = "kosta@gmail.com";

  constructor(private router: Router) {
    PageScrollConfig.defaultScrollOffset = 50;
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url.indexOf("youth") !== -1){
          this.emailAddress = "youth.kostanz@gmail.com";
        } else {
          this.emailAddress = "kostanz@gmail.com";
        }
      }
    });
  }
}
