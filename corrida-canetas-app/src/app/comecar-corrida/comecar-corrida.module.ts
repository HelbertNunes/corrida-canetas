import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComecarCorridaPageRoutingModule } from './comecar-corrida-routing.module';

import { ComecarCorridaPage } from './comecar-corrida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComecarCorridaPageRoutingModule
  ],
  declarations: [ComecarCorridaPage]
})
export class ComecarCorridaPageModule {}
