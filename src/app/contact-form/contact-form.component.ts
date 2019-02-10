import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {ContactModel} from '../contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  name: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  desc: string = '';
  constructor(private contactService: ContactService) { }

  addContact():void{
    let cntc = new ContactModel(this.name,
      this.phone,this.email,this.address,this.desc);
    this.contactService.add(cntc);
    this.name = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.desc = '';
  }

}
