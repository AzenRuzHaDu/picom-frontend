import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './component/app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './business/app-routing.module';
import { ScreenConnectionComponent } from './component/screen-connection/screen-connection.component';
import { ConnectionCardComponent } from './component/screen-connection/connection-card/connection-card.component';



@NgModule({
  declarations: [
    AppComponent,
    ScreenConnectionComponent,
    ConnectionCardComponent,

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
