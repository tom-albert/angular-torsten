import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Router} from "@angular/router";


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

  private contact;
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
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
