import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './component/app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ScreenConnectionComponent } from './component/screen-connection/screen-connection.component';
import { ConnectionCardComponent } from './component/screen-connection/connection-card/connection-card.component';
import { ScreenTarifComponent } from './component/screen-tarif/screen-tarif.component';
import { CardTarifComponent } from './component/screen-tarif/card-tarif/card-tarif.component';
import { ListeTarifComponent } from './component/screen-tarif/liste-tarif/liste-tarif.component';
import { DetailTarifCardComponent } from './component/screen-tarif/liste-tarif/detail-tarif-card/detail-tarif-card.component';
import { InscriptionCardComponent } from './component/screen-connection/inscription-card/inscription-card.component';
import { ScreenListAnnoncesComponent } from './component/screen-list-annonces/screen-list-annonces.component';
import { ListAnnonceComponent } from './component/screen-list-annonces/list-annonce/list-annonce.component';
import { AnnonceCardComponent } from './component/screen-list-annonces/list-annonce/annonce-card/annonce-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ScreenConnectionComponent,
    ConnectionCardComponent,
    ScreenTarifComponent,
    CardTarifComponent,
    ListeTarifComponent,
    DetailTarifCardComponent,
    InscriptionCardComponent,
    ScreenListAnnoncesComponent,
    ListAnnonceComponent,
    AnnonceCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
