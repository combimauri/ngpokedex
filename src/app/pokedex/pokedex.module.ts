import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedexService } from './pokedex.service';
import { ModalModule } from '../shared/directives/modal/modal.module';

@NgModule({
  declarations: [PokedexComponent, PokemonComponent],
  imports: [CommonModule, FormsModule, PokedexRoutingModule, ModalModule],
  providers: [PokedexService]
})
export class PokedexModule {}
