import { Contact } from '../models/contact';
import { ContactManager } from './contact-manager';

import { CONTACT_DATA } from './contact-data';

describe('Contact Manager', function() {
  describe('should initialize', function() {
    it('with empty list', function() {
      const mngr = new ContactManager<Contact>();

      expect(mngr.contacts.length).toEqual(0);
    });
  });
});
