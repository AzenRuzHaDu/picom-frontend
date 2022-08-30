import { Client } from "./client";
import { TrancheHorraire } from "./tranche-horraire";
import { Zone } from "./zone";

export class Annonce {

  id!:number;
  dateHeureCreation!:Date;
  dateHeureDebut!:Date;
  dateHeurefin!:Date;
  contenu!:string;
  titre!:string;
  numeroCarte!:string;
  anneExpiration!:number;
  moisExpiration!:number;
  cryptogramme!:string;
  montantRegleEnEuros!:number;
  client!:Client;
  zones :Zone[] = [];
  trancheHorraires:TrancheHorraire[] = [];
  idClient !: number;
}
