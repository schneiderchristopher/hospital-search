import { IPlan } from "./plan";

export interface IHospital {
  id: number;
  name: string;
  location: string;
  plans: IPlan[];
}
