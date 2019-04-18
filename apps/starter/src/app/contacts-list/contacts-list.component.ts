import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts$: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.contactsService.getContacts();

    this.searchCriteria$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    ).subscribe(this.search.bind(this));

  }

  trackByContactId(index, contact) {
    return contact.id;
  }

  search(criteria:string) {
    this.contacts$ = this.contactsService.search(criteria);
  }

  private emitter = new Subject<string>();
  private searchCriteria$ = this.emitter.asObservable();
}
