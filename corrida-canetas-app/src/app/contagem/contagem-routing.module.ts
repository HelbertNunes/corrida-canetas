import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContagemPage } from './contagem.page';

const routes: Routes = [
  {
    path: '',
    component: ContagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContagemPageRoutingModule {}
