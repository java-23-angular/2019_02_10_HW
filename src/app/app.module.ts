import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactRowComponent } from './contact-row/contact-row.component';
import {FormsModule} from '@angular/forms';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactRowComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
