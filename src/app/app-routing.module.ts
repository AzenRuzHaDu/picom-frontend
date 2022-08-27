import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ScreenConnectionComponent } from "./component/screen-connection/screen-connection.component";
import { ScreenTarifComponent } from "./component/screen-tarif/screen-tarif.component";


const routes: Routes = [
{ path: '', component: ScreenConnectionComponent },
{ path: 'admin', component: ScreenTarifComponent}
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
