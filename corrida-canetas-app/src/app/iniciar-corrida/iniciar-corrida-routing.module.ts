import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarCorridaPage } from './iniciar-corrida.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarCorridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarCorridaPageRoutingModule {}
