import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, merge } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts$: Observable<Contact[]>;
  searchControl = new FormControl('');

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    const searchResults$ = this.searchControl.valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap(term => this.contactsService.search(term))
    );
    const allContacts$ = this.contactsService.getContacts().pipe(
      delay(6000),
      takeUntil(searchResults$),
    );


    this.contacts$ = merge(allContacts$, searchResults$);
  }

  trackByContactId(index, contact) {
    return contact.id;
  }

}
