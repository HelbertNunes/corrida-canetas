import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherPistasPage } from './escolher-pistas.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherPistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherPistasPageRoutingModule {}
