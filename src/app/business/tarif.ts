import { Administrateur } from "./administrateur";
import { Zone } from "./zone";

export class Tarif {


  id?:number;
  prixEnEuros?:number;
  trancheHorraire?:number;
  zone?:number;
  administrateur?:Administrateur;

  constructor(prixEnEuros:number, trancheHorraire:number, zone:number ){
    this.prixEnEuros = prixEnEuros;
    this.trancheHorraire = trancheHorraire;
    this.zone = zone;
    

  }
}
