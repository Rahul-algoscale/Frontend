import { Component } from '@angular/core';

@Component({
  selector: 'messages',
  template: '<p> This is my message </p> <div *ngFor="let message of messages">{{message.text}} by: {{message.owner}} </div>'

})
export class MessagesComponent {
  messages = [{text:'Some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}];
}
