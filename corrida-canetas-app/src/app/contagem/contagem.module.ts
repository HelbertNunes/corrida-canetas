import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContagemPageRoutingModule } from './contagem-routing.module';

import { ContagemPage } from './contagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContagemPageRoutingModule
  ],
  declarations: [ContagemPage]
})
export class ContagemPageModule {}
