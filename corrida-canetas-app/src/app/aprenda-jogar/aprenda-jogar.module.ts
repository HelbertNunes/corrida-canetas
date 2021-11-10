import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprendaJogarPageRoutingModule } from './aprenda-jogar-routing.module';

import { AprendaJogarPage } from './aprenda-jogar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprendaJogarPageRoutingModule
  ],
  declarations: [AprendaJogarPage]
})
export class AprendaJogarPageModule {}
