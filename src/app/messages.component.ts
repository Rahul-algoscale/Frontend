import { Component } from '@angular/core';

@Component({
  selector: 'messages',
  template: `
  <p> This is my message </p>
   <div *ngFor="let message of messages">
   <mat-card>
   <mat-card-title>{{message.owner}}</mat-card-title> <mat-card-content>{{message.text}}</mat-card-content> </mat-card></div>
   `

})
export class MessagesComponent {
  messages = [{text:'Some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}
