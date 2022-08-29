import { Administrateur } from './administrateur';
import { TrancheHorraire } from './tranche-horraire';
import { Zone } from './zone';

export class Tarif {
  administrateur: Administrateur; 
  id: number | undefined;
  prixEnEuros: number;
  trancheHorraire: TrancheHorraire;
  zone: Zone;

  constructor(
    administrateur: Administrateur = new Administrateur(),
    prixEnEuros: number = 0,
    trancheHorraire: TrancheHorraire = new TrancheHorraire(),
    zone: Zone = new Zone()
  ) {
    this.administrateur = administrateur;
    this.prixEnEuros = prixEnEuros;
    this.trancheHorraire = trancheHorraire;
    this.zone = zone;
  }
}
