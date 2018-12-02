import {Component, Input} from '@angular/core';
import {Introduction} from '../model/introduction';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'conference-intro',
  templateUrl: 'conference-intro.html'
})
export class ConferenceIntroComponent {
  @Input() introductionList : Array<Introduction>;
  @Input() videoUrl: string;
  url: SafeResourceUrl;
  shouldShowList: boolean = false;
  currentView: number = 0;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  toggleList(){
    this.shouldShowList = !this.shouldShowList;
  }

  viewTab(viewNum: number) {
    this.currentView = viewNum;
    this.shouldShowList = false;
  }

  isVideo(name: string) {
    return name === "Video";
  }

  isTheme(name: string) {
    return name === "Theme";
  }

  isPromotion(name: string) {
    return name === "Promotion package";
  }
}
