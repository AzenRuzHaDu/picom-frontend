import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarif } from 'src/app/business/tarif';



@Component({
  selector: 'app-detail-tarif-card',
  templateUrl: './detail-tarif-card.component.html',
  styleUrls: ['./detail-tarif-card.component.css']
})
export class DetailTarifCardComponent implements OnInit {
  
  //
  
  @Input()
  tarifs!: Tarif;
  


  constructor() {

    

    
   }

  ngOnInit(): void {


    


  }
  

}
