import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {
mail = 'http://mail.rwebdesign7.com';
constructor(private http: HttpClient) { }

sendMessage(messageContent: any) {
  return this.http.post(this.mail,
  JSON.stringify(messageContent),
  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}
}
