import { Annonce } from "./annonce";
import { Arret } from "./arret";

export class Zone {

  id?:number;
  nom?:string;
  annonces?:Annonce[];
  arrets?:Arret[];

}
