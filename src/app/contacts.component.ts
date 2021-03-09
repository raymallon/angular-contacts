import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-list',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contacts = [];

  constructor(private _contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this._contactsService.getContacts();
  }

}