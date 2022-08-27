import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { ScreenConnectionComponent } from "./component/screen-connection/screen-connection.component";


const routes: Routes = [
{ path: '', component: ScreenConnectionComponent }
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
