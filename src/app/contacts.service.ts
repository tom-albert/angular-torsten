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
        .map(res => res.json().item);
  }

  addContact(contact: Contact) {
    let url = this.getEndPointUrl() + `/contacts`;
    return this.http.post(url, contact).map(res => res.json().item);
  }

  getEndPointUrl() {
    return this.API_ENDPOINT;
  }

  updateContact(contact:Contact) {
    let url = this.getEndPointUrl() + `/contacts/${contact.id}`;
    return this.http.put(url, contact).map(res => res.json().item);
  }

  search(term: string):Observable<Array<Contact>> {
    return this.http.get(`${this.API_ENDPOINT}/search?text=${term}`)
        .map(res => res.json().items);

  }

}
