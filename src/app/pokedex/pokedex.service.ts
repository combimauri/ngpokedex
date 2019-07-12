import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Pokemon } from '../shared/models/pokemon.model';
import { DataService } from '../shared/models/data-service.model';
import { FirestoreCollection } from '../shared/models/firestore-collection.enum';

@Injectable()
export class PokedexService extends DataService<Pokemon> {
  constructor(db: AngularFirestore) {
    super(db, FirestoreCollection.pokemon);
  }
}
