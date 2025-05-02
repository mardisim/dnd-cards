export interface IDndClassModel {
  id: number;
  name: string;
}

export type DnDClassState = {
  dndClasses: IDndClassModel[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};
