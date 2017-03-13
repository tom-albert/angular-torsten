import { Component, OnInit } from '@angular/core';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
    contactsService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    //this.contacts = this.contactsService.getContacts();
  }


}
