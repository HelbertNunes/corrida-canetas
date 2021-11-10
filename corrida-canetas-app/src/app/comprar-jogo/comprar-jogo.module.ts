import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComprarJogoPageRoutingModule } from './comprar-jogo-routing.module';

import { ComprarJogoPage } from './comprar-jogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComprarJogoPageRoutingModule
  ],
  declarations: [ComprarJogoPage]
})
export class ComprarJogoPageModule {}
