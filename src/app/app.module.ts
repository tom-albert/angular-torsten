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
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import {ContactResolver} from "./shared/contacts.resolver";
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';

@NgModule({
  declarations: [EmailValidatorDirective, ContactsAppComponent, ContactsListComponent, ContactDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabComponent, TabsComponent, ContactsDashboardComponent, ContactsCreatorComponent, EmailValidatorDirective],
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
    { provide: ContactsService, useClass: ContactsService },
    ContactResolver,
    {
      provide: 'ConfirmNavigationGuard',
      useValue: confirmNavigationGuard
    }
  ]
})

export class ContactsModule {

}

// Needs to be an exported function for AOT to work
export function confirmNavigationGuard(component: ContactsEditorComponent) {
  return !component.warnOnClosing || window.confirm('Navigate away without saving?');
}