import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherPistasPageRoutingModule } from './escolher-pistas-routing.module';

import { EscolherPistasPage } from './escolher-pistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherPistasPageRoutingModule
  ],
  declarations: [EscolherPistasPage]
})
export class EscolherPistasPageModule {}
