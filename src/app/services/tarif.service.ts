
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../business/tarif';
import { HttpclientserviceService } from './httpclientservice.service';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  tarifs$!: Observable<Tarif[]>;

  constructor(private http: HttpclientserviceService) {}

  getTarifs(): Observable<Tarif[]> {
// return this.tarifs$ = this.http.getAll('tarifs');
return this.http.getAll('tarifs'); 
  }



}
