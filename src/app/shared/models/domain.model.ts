import { GroupeCaracteristique } from "./GroupeCaracteristique.model";
import { taxonomie } from "./taxonomy.model";

export interface domain {
  _id: string;
  translations: {
    language: string;
    designation: string;
    description: string;
  };
  logo: string;
  code: string;
  parent: domain | null;
  children: domain[];
  taxonomies:taxonomie[];
  hasTaxonomies: boolean;
  etatObjet?: "code-1" | "code-2";
  etatCreation?: string;
  groupe : GroupeCaracteristique[]
  dateEnregistrement?: Date | string;
}
