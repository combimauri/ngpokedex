import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { PokedexService } from './pokedex.service';

const angularFirestoreMock = {
  collection: () => {}
};

describe('PokedexService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        PokedexService,
        { provide: AngularFirestore, useValue: angularFirestoreMock }
      ]
    })
  );

  it('should be created', () => {
    const service: PokedexService = TestBed.get(PokedexService);
    expect(service).toBeTruthy();
  });
});
