import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarCorridaPageRoutingModule } from './iniciar-corrida-routing.module';

import { IniciarCorridaPage } from './iniciar-corrida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarCorridaPageRoutingModule
  ],
  declarations: [IniciarCorridaPage]
})
export class IniciarCorridaPageModule {}
