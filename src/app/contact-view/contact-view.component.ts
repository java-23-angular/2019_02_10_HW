import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent{

  constructor(public contactService: ContactService) { }

}
