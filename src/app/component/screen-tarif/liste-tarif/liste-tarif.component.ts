import { Component, Input, OnInit } from '@angular/core';
import { Tarif } from 'src/app/business/tarif';

@Component({
  selector: 'app-liste-tarif',
  templateUrl: './liste-tarif.component.html',
  styleUrls: ['./liste-tarif.component.css']
})
export class ListeTarifComponent implements OnInit {
  @Input()
  tarifs: Tarif[];
  
 
  constructor() { 
    this.tarifs = [
      new Tarif(20,2,1),
      new Tarif(40,2,1),
      new Tarif(60,2,1)
    ]
  }
  


  
  ngOnInit(): void {
  }

}
