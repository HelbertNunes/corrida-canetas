import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-corrida',
    loadChildren: () => import('./iniciar-corrida/iniciar-corrida.module').then( m => m.IniciarCorridaPageModule)
  },
  {
    path: 'quadro-recordes',
    loadChildren: () => import('./quadro-recordes/quadro-recordes.module').then( m => m.QuadroRecordesPageModule)
  },
  {
    path: 'aprenda-jogar',
    loadChildren: () => import('./aprenda-jogar/aprenda-jogar.module').then( m => m.AprendaJogarPageModule)
  },
  {
    path: 'comprar-jogo',
    loadChildren: () => import('./comprar-jogo/comprar-jogo.module').then( m => m.ComprarJogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
