import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-screen-connection',
  templateUrl: './screen-connection.component.html',
  styleUrls: ['./screen-connection.component.css'],
})
export class ScreenConnectionComponent implements OnInit {
  constructor() {}

  getMailandPaswd(form: NgForm) {
    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
