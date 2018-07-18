import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
   MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
  } from '@angular/material';

import { AppComponent } from './app.component';
import { MessagesComponent} from './messages.component'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
      MatButtonModule,
       MatCardModule,
        MatToolbarModule,
         MatInputModule,
          MatSnackBarModule,
           MatCheckboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
