import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Http} from "@angular/http";


@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private http: Http) {
    let id = this.route.snapshot.params['id'];
    contactsService.getContact(id)
        .subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {

  }

  save(contact: Contact) {
    this.contactsService.updateContact();
  }

  ngOnInit() {

  }
}
