import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Contact} from "../models/contact";


@Component({
  selector: 'trm-contacts-detail-view',
  template: `
        <trm-contacts-detail [contact]="contact"
          (edit)="navigateToEditor($event)"
          (back)="navigateToList()">
        </trm-contacts-detail>
    `,
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  private contact:Contact;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    //let id = this.route.snapshot.params['id'];
    //this.contactsService.getContact(id)
    //    .subscribe(contact => this.contact = contact);


    //this.route.params.subscribe(params => { // Observable<Contact>
    //  this.contactsService.getContact(params['id']).subscribe(contact => this.contact = contact);
    //});

     //this.route.params.switchMap(params => this.contactsService.getContact(params['id'])) // Observable<Contact>
     //    .subscribe(
     //        contact => this.contact = contact
     //    );

    this.route.data
        .map(data => data['contact'])  // extract contact
        .subscribe(contact => this.contact = contact);
  }

  navigateToEditor(contact) {
    //this.router.navigate(['/contact', this.contact.id, 'edit']);
    this.router.navigate(['edit'], { relativeTo: this.route });

  }

  navigateToList() {
    this.router.navigate(['/']);
  }

}
