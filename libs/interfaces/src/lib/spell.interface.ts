import { IDndClassModel } from './dndclass.interface';
import { ISchoolModel } from './school.interface';

export interface ISpellModel {
  id: number;
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
