import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VencedorCorridaPageRoutingModule } from './vencedor-corrida-routing.module';

import { VencedorCorridaPage } from './vencedor-corrida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VencedorCorridaPageRoutingModule
  ],
  declarations: [VencedorCorridaPage]
})
export class VencedorCorridaPageModule {}
