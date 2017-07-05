import {Component, ContentChildren, QueryList, AfterContentInit, Input} from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Input() tabsStyle: String;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(current: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.deactivate());

    // activate the tab the user has clicked on.
    current.activate();
  }

}
