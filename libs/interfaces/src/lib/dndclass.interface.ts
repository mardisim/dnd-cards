import { ISpellModel } from './spell.interface';

export interface IDndClassModel {
  id: string;
  name: string;
  spells: ISpellModel[];
}

export type DnDClassState = {
  dndClasses: IDndClassModel[];
  spells: ISpellModel[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};
