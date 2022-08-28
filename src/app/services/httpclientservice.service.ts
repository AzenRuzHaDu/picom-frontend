import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../business/client';


@Injectable({
  providedIn: 'root'
})
export class HttpclientserviceService {

  constructor(private clientHttp: HttpClient) {}

  getAll(pathEnd: string): Observable<any[]>{
    // TODO document why this method 'getAll' is empty
return this.clientHttp.get<any[]>(`http://localhost:8080/api/${pathEnd}`)

  }




}
