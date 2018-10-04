import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CONTACT_DATA } from './data/contact-data';
import { Contact } from './models/contact';


@Injectable()
export class MockContactsService {
  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(CONTACT_DATA)
  }

  getContact(id: string): Observable<Contact> {
    const contact = CONTACT_DATA.reduce((result, it:Contact) => {
      return result || ((it.id === +id) ? it : null);
    },null);
    return of(contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return of(contact);
  }

  search(criteria:string) : Observable<Contact[]> {
    const regExp = new RegExp(criteria,"i");
    const list = CONTACT_DATA.filter(it => regExp.test(it.name));
    return of(list);
  }

}
