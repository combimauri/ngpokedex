import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PokedexService } from './pokedex.service';
import { Pokemon } from '../shared/models/pokemon.model';
import { DataOrder } from '../shared/models/data-order.enum';

@Component({
  selector: 'pok-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;
  pokeNumber: number;
  pokeName: string;

  constructor(private pokeService: PokedexService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokeService.getAllSorted('pokeNumber', DataOrder.asc);
  }

  savePokemon(): void {
    const pokemon: Pokemon = {
      id: '',
      pokeNumber: this.pokeNumber,
      name: this.pokeName,
      pictureUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        this.pokeNumber
      }.png`
    };
    this.pokeService.save(pokemon);
  }
}
