import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemon'
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path: '**',
    component: PokedexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
