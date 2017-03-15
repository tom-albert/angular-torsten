import { Component, OnInit } from '@angular/core';
import {Contact} from "../models/contact";
import {Router} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {

  constructor(private router: Router, private contactsService: ContactsService) { }

  ngOnInit() {
  }
  save(contact: Contact) {
    this.contactsService.addContact(contact)
        .subscribe(
            () => this.router.navigate(['/'])
        );
  }
}
