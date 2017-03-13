import { Component } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <md-toolbar color="accent">Contacts</md-toolbar>
`,
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
}
