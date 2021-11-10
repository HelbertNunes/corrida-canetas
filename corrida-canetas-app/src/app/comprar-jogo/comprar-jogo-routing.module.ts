import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComprarJogoPage } from './comprar-jogo.page';

const routes: Routes = [
  {
    path: '',
    component: ComprarJogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComprarJogoPageRoutingModule {}
