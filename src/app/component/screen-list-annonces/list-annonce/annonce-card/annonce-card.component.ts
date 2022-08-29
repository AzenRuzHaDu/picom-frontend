import { Component, Input, OnInit } from '@angular/core';
import { Annonce } from 'src/app/business/annonce';

@Component({
  selector: 'app-annonce-card',
  templateUrl: './annonce-card.component.html',
  styleUrls: ['./annonce-card.component.css']
})
export class AnnonceCardComponent implements OnInit {

  @Input()
  annonce!:Annonce;

  constructor() {

   }

  ngOnInit(): void {
    console.log(this.annonce);
  }

}
