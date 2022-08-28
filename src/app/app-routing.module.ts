import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ScreenConnectionComponent } from "./component/screen-connection/screen-connection.component";
import { ScreenListAnnoncesComponent } from "./component/screen-list-annonces/screen-list-annonces.component";


const routes: Routes = [
{ path: '', component: ScreenListAnnoncesComponent},
{ path: 'connection', component: ScreenConnectionComponent}
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
