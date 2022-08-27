import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-screen-connection',
  templateUrl: './screen-connection.component.html',
  styleUrls: ['./screen-connection.component.css'],
})
export class ScreenConnectionComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  getMailandPaswd(form: NgForm) {
    this.clientService.addConnect(form.value.email, 'email');
    this.clientService.addConnect(form.value.motDePasse, 'password');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
