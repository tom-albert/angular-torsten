import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {Routes} from "@angular/router";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";
import {AboutComponent} from "./about/about.component";
import {ContactResolver} from "./shared/contacts.resolver";

export const APP_ROUTES:Routes = [
    {
        path: '',
        component: ContactsDashboardComponent,
        children: [
            { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
            {
                path: 'contact/:id',
                component: ContactsDetailViewComponent,
                resolve: {
                    contact: ContactResolver
                }
            },
            {
                path: 'contact/:id/edit',
                component: ContactsEditorComponent,
                canDeactivate: ['ConfirmNavigationGuard'],
                resolve: {
                    contact: ContactResolver
                }
            }
        ]
    },
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: '**', redirectTo: '/'}
];