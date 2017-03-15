import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  warnOnClosing = true;
  private contact: Contact = <Contact>{ address: {}};
  constructor(private route: ActivatedRoute,
              private contactsService: ContactsService,
              private router: Router
  ) {
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.warnOnClosing = false;
    this.contactsService.updateContact(contact)
        .subscribe(
            contact => this.goToDetails(contact)
        );
  }

  private goToDetails(contact:Contact) {
    this.router.navigate(['/contact', contact.id]);
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
        .subscribe(contact => this.contact = contact);
  }
}
