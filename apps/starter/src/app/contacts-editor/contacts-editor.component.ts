import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  contact: Contact = <Contact>{ address: {}};

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.paramMap.get('id'))
                        .subscribe(contact => this.contact = contact);
  }

  cancel() {
    this.goBackToDetails();
  }

  save(contact: Contact) {
   this.contactsService
       .updateContact(contact)
       .subscribe(() => {
         this.goBackToDetails();
       });
  }

  private goBackToDetails() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}

