import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComecarCorridaPage } from './comecar-corrida.page';

const routes: Routes = [
  {
    path: '',
    component: ComecarCorridaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComecarCorridaPageRoutingModule {}
