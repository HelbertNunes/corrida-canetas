import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprendaJogarPage } from './aprenda-jogar.page';

const routes: Routes = [
  {
    path: '',
    component: AprendaJogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprendaJogarPageRoutingModule {}
