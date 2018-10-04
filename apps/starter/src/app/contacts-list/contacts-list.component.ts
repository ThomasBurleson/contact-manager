import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts$: Observable<Contact[]> = this.contactsService.getContacts();

  constructor(private contactsService: ContactsService) { }

  trackByContactId(index, contact) {
    return contact.id;
  }
}
