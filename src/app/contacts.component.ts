import { Component } from '@angular/core';
import { Contact } from './models/contact';
import {ContactsService} from "./contacts.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsAppComponent implements OnInit {

    contacts: Contact[];

    constructor(private contactsService: ContactsService) {}

    ngOnInit() {
        this.contacts = this.contactsService.getContacts();
    }
}
