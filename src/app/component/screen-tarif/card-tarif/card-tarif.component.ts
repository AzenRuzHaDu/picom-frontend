import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-tarif',
  templateUrl: './card-tarif.component.html',
  styleUrls: ['./card-tarif.component.css']
})
export class CardTarifComponent implements OnInit {

  zone: String= '';
  tranche: String='';
  tarif: number=0;

  @Output()
  eventemitter = new EventEmitter<NgForm>();
  onSubmit(form : NgForm) {
    this.eventemitter.emit(form);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
