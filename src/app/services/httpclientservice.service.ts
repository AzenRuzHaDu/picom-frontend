import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Tarif } from '../business/tarif';


@Injectable({
  providedIn: 'root'
})
export class HttpclientserviceService {

  constructor(private clientHttp: HttpClient) {}

  getAll(pathToApi: string): Observable<any[]>{
    // TODO document why this method 'getAll' is empty
return this.clientHttp.get<any[]>(`http://localhost:8180/api/${pathToApi}`)

  }

  getOne(pathToAPI: string, objectId: number): Observable<any> {
    return this.clientHttp.get<any>(`http://localhost:8180/api/${pathToAPI}/${objectId}`).pipe(
      catchError((error) => this.handleError(error, undefined))
    );
  }


  addOne(objectToAdd: any | undefined): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.clientHttp.post<any>(`http://localhost:8180/api/${objectToAdd}`, objectToAdd, httpOptions).pipe(
      catchError((error) => this.handleError(error, undefined))
    );
  }

  private handleError(error: Error, errorValue: any) {
    return of(errorValue);
  }
}

