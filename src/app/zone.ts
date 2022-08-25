import { Annonce } from "./annonce";
import { Arret } from "./arret";

export class Zone {


  id?:number;
  nom?:String;
  annonces?:Annonce[];
  arrets?:Arret[];

}
