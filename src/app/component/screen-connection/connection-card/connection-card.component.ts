import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from 'src/app/business/client';



@Component({
  selector: 'app-connection-card',
  templateUrl: './connection-card.component.html',
  styleUrls: ['./connection-card.component.css']
})
export class ConnectionCardComponent implements OnInit {

  email?:string;
  motDePasse?:string;
  client : Client;

  @Output()
  eventemitter = new EventEmitter<NgForm>();


  constructor() {
    this.client = new Client();
  }

  ngOnInit(): void {
  }

onSubmit(form : NgForm) {
this.eventemitter.emit(form);
}

}
