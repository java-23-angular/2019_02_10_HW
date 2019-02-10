import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent{
  constructor(public contactService: ContactService) {

  }

}
