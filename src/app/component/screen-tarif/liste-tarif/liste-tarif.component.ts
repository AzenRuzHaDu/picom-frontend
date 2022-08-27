import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-tarif',
  templateUrl: './liste-tarif.component.html',
  styleUrls: ['./liste-tarif.component.css']
})
export class ListeTarifComponent implements OnInit {
  public tarifs: Array<{zone: String, trancheHorraire: String, prixEnEuros: number} >=
  [
    {zone: "zone1", trancheHorraire: "tranche1", prixEnEuros: 20},
    {zone: "zone1", trancheHorraire: "tranche2", prixEnEuros: 40},
    {zone: "zone1", trancheHorraire: "tranche3", prixEnEuros: 60},
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
