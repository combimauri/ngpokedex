import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../../shared/models/pokemon.model';

@Component({
  selector: 'pok-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokedexService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemon$ = this.pokeService.getById(this.id);
  }
}
