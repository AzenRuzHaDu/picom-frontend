import { Administrateur } from "./administrateur";
import { Zone } from "./zone";

export class Tarif {

  administrateur?:Administrateur;
  id?:number;
  prixEnEuros?:number;
  trancheHorraire?:number;
  zone?:Zone;


}
