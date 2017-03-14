import { Component, OnInit } from '@angular/core';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {Observable, Subject} from "rxjs";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/takeUntil";

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
    this.contacts = this.terms$.debounceTime(400)             // Obervable<string>
        .distinctUntilChanged()                               // Obervable<string>
        .switchMap(term => this.contactsService.search(term)) // Observable<Array<Contact>>
        .merge(this.contactsService.getContacts().delay(5).takeUntil(this.terms$));           // Observable<Array<Contact>>
  }
}
