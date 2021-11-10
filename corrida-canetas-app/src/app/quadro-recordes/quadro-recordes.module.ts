import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuadroRecordesPageRoutingModule } from './quadro-recordes-routing.module';

import { QuadroRecordesPage } from './quadro-recordes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuadroRecordesPageRoutingModule
  ],
  declarations: [QuadroRecordesPage]
})
export class QuadroRecordesPageModule {}
