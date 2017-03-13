import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './contacts.component';
import {ContactsService} from "./contacts.service";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {RouterModule} from "@angular/router";
import { APP_ROUTES } from './app.routes';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactDetailComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    { provide: ContactsService, useClass: ContactsService }
  ]
})
export class ContactsModule {

}
