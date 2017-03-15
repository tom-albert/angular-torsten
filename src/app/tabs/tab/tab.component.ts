import {Component, Input} from '@angular/core';

@Component({
  selector: 'trm-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.css']
})
export class TabComponent {

  selected = false;
  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
