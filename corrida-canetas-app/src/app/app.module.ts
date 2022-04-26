import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JogadoresService } from "./service/jogadores.service";
import { PistasService } from "./service/pistas.service";
import { TrofeusService } from './service/trofeus.service';
import { CircuitosService } from './service/circuito.service';

import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, JogadoresService, PistasService, TrofeusService, CircuitosService, NativeAudio],
  bootstrap: [AppComponent],
})
export class AppModule { }
