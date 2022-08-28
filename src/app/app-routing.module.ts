import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ScreenAddAnnonceComponent } from "./component/screen-add-annonce/screen-add-annonce.component";
import { ScreenConnectionComponent } from "./component/screen-connection/screen-connection.component";
import { ScreenListAnnoncesComponent } from "./component/screen-list-annonces/screen-list-annonces.component";


const routes: Routes = [
{ path: '', component: ScreenListAnnoncesComponent},
{ path: 'connection', component: ScreenConnectionComponent},
{ path: 'addannonce', component: ScreenAddAnnonceComponent},
];

@NgModule({
imports: [
  RouterModule.forRoot(routes)
],
exports: [
  RouterModule
]
})

export class AppRoutingModule {



}
