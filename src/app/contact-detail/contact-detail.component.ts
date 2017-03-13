import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'trm-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  private contact;
  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}
