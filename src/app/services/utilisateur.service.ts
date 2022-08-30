import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../business/annonce';
import { Client } from '../business/client';
import { Utilisateur } from '../business/utilisateur';
import { HttpclientserviceService } from './httpclientservice.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpclientserviceService) { }

getClients(utilisateur : Utilisateur): Observable<Utilisateur> {
return this.http.getOne('utilisateurs',utilisateur.id);
}

getAnnonces() : Observable<Annonce[]>{
return this.http.getOne('annonces',3);
}

sendAnnonce(annonce:Annonce) : Observable<Annonce>{
return this.http.addOne(annonce,"Annonce")
}

}
