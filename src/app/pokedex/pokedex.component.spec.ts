import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';

import { PokedexComponent } from './pokedex.component';
import { PokedexService } from './pokedex.service';

const pokedexServiceMock = {
  getAllSorted: () => of([]),
  save: () => of()
};

describe('PokedexComponent', () => {
  let component: PokedexComponent;
  let fixture: ComponentFixture<PokedexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        {
          provide: PokedexService,
          useValue: pokedexServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
