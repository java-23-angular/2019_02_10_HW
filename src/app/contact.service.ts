import {ContactModel} from './contact.model';

export class ContactService {
  contacts: ContactModel[] = [];
  curr: ContactModel|null = null;


  add(contact: ContactModel): void{
    this.contacts.push(contact);
  }

  setCurrent(index: number) {
    this.curr = this.contacts[index];
  }
}
