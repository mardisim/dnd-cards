import { IDndClassModel } from './dndclass.interface';
import { ISchoolModel } from './school.interface';

export interface ISpellModel {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  range: string;
  components: string;
  material: string;
  action: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  castingTime: string;
  level: number;
  school: ISchoolModel;
  dndClasses: IDndClassModel[];
}

export type SpellState = {
  spells: ISpellModel[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};
