import { Injectable } from '@angular/core';
import { Client } from '../business/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients: Client[] = [];
  password?: string;
  email?: string;

  client: Client = new Client();

  constructor() {
    this.client.id = 1;
    this.client.nom = 'Marechal';
    this.client.prenom = 'Manon';
    this.client.numeroDeTelephone = '0632508490';
    this.client.email = 'test@example.com';
    this.client.motDePasse = 'password';
  }

  addClient(client: Client) {
    this.clients.push(client);
  }

  addConnect(s: string, sType: 'email' | 'password'): void {
    if (sType === 'password') {
      this.password = s;
    }
    this.email = s;
  }
}
