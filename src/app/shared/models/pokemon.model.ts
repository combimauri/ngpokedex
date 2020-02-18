import { DataType } from './data-type.model';

export interface Pokemon extends DataType {
  name: string;
  pokeNumber: number;
  pictureUrl: string;
}
