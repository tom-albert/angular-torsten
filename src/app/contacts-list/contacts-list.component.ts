import { Component, OnInit } from '@angular/core';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {Observable, Subject} from "rxjs";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => this.search(term));
  }

  search(term: string) {
    this.contacts = this.contactsService.search(term);
  }
}
