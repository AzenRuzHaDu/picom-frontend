import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrancheHorraire } from '../business/tranche-horraire';
import { HttpclientserviceService } from './httpclientservice.service';

@Injectable({
  providedIn: 'root',
})
export class TrancheHoraireService {
  constructor(private http: HttpclientserviceService) {}

  getTranchesHorraires(): Observable<TrancheHorraire[]> {
    return this.http.getAll('tranchesHoraires');
  }
}
