import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from 'src/app/business/annonce';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {

annonces$!: Observable<Annonce[]>;

  constructor(private user:UtilisateurService) { }



  ngOnInit(): void {
    this.annonces$ = this.user.getOne();
  }

}
