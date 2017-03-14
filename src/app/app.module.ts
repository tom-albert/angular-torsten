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
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [
    { provide: ContactsService, useClass: ContactsService }
  ]
})

export class ContactsModule {

}
