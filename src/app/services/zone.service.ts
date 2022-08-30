import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zone } from '../business/zone';
import { HttpclientserviceService } from './httpclientservice.service';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpclientserviceService) {}


  getZones(): Observable<Zone[]> {
    return this.http.getAll('zones');
      }

}
