import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Contact} from "./models/contact";

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  private API_ENDPOINT:string = 'http://localhost:4201/api';

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
        .map((res) => { return res.json().items; });
  }

  getContact(id: string):Observable<Contact> {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
        .map((res) => { return res.json().item; });
  }

  getEndPointUrl() {
    return this.API_ENDPOINT;
  }

  updateContact(contact:Contact) {
    let url = this.getEndPointUrl() + `/contacts/${contact.id}`;
    //console.log('save' + url);

    this.http.put(url, contact).subscribe(contact => contact = contact)
  }
}
