import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 공유할 상태를 정의
  messages: string[] = [];
  add(messages: string) {
    this.messages.push(messages);
  }
  clear() {
   this.messages = [];
  }

  constructor() {
    this.messages = [];
  }
}
