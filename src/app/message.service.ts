import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  Messages: string[] = [];

  add(message: string): void  {
    this.Messages.push(message);
  }

  clear(): void {
    this.Messages = [];
  }

  constructor() { }
}
