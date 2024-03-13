import { CaracteristiqueDemandable } from "./CaracteristiqueDemandable.model";
import { GroupeCaracteristique } from "./GroupeCaracteristique.model";


export interface taxonomie {
  _id: string;
  translations: {
    language: string;
    designation: string;
    description: string;
  };
  logo: string;
  code: string;
  parent: taxonomie | null;
  children: taxonomie[];
  domain: string;
  hasTaxonomies: boolean;
  etatObjet?: "code-1" | "code-2";
  etatCreation?: string;
  dateEnregistrement?: Date | string;
  caracteristique : CaracteristiqueDemandable[]
}
