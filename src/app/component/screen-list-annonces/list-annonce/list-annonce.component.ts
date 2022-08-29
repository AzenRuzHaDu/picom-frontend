import { Component, OnInit } from '@angular/core';
import { Annonce } from 'src/app/business/annonce';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {

annonces!:Annonce[];

  constructor() { }



  ngOnInit(): void {
  }

}
