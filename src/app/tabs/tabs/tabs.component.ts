import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {TabComponent} from "../tab/tab.component";

@Component({
  selector: 'trm-tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  private tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  select(tab: TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }
}
