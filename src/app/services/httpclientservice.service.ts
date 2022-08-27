import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../business/client';


@Injectable({
  providedIn: 'root'
})
export class HttpclientserviceService {

  client: Client = new Client();

  constructor(private clientHttp: HttpClient) {

  }

  clientPost(client:Client) {
return this.clientHttp.post<Client>('https://localhost:8081/api/connection', client).subscribe(data => {
this.client = data;
})

}
}
