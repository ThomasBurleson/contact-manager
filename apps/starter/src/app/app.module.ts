import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { APP_ROUTES } from './app.routes';

import { ContactsMaterialModule } from './contacts-material.module';
import { ContactsNgRxModule } from './contacts-ngrx.module';
import { ContactsService } from './contacts.service';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { MockContactsService } from './contacts.service-mock';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ContactsMaterialModule,
    ContactsNgRxModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ContactsService,
    {
      provide: ContactsService,
      useClass: MockContactsService
    }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {
}
