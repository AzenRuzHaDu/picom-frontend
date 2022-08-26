import { Administrateur } from "./administrateur";
import { Zone } from "./zone";

export class Tarif {


  id?:number;
  prixEnEuros?:number;
  trancheHorraire?:number;
  zone?:Zone;
  administrateur?:Administrateur;

}
