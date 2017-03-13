import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Injectable()
export class ContactsService {

  constructor(private http: Http) { }

  private API_ENDPOINT:string = 'http://localhost:4201/api';

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
        .map((res) => { return res.json().items; });
  }

  getContact(id: string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
        .map((res) => { return res.json().item; });
  }
}
