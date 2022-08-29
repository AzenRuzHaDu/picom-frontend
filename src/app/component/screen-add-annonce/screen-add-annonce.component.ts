import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tarif } from 'src/app/business/tarif';
import { TarifService } from 'src/app/services/tarif.service';

@Component({
  selector: 'app-screen-add-annonce',
  templateUrl: './screen-add-annonce.component.html',
  styleUrls: ['./screen-add-annonce.component.css']
})
export class ScreenAddAnnonceComponent implements OnInit {

  tarifs !: Tarif[];

  constructor(private service : TarifService) { }

  ngOnInit(): void {
   this.service.getTarifs().subscribe((tarifs: Tarif[]) => this.tarifs = tarifs);
   console.log(this.tarifs);
  //  this.service.getTarifs().pipe(map(v => this.tarifs.push()));
  //  this.tarifs.forEach(d => console.log(d));
  //  this.service.getTarifs().forEach(data => console.log((data)));
  }
}
