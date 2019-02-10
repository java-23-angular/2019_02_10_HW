import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from '../contact.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent{
  @Input('cntc') contact:ContactModel;
  @Input('indx') index: number;
  constructor(private contactService: ContactService) { }


  onRowClick(): void{
    this.contactService.setCurrent(this.index);
  }

}
