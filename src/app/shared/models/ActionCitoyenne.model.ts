import { Donnee } from "./Donnee.model";
import { contenu } from "./contenu.model";
import { Contribution } from "./contributions.model";
import { instruction } from "./instruction.model";
import { Membre } from "./membre.model";
import { message } from "./message.model";
import { reference } from "./reference.model";

export interface ActionCitoyenne {
  _id: string;
  etatobjet: string;
  reference: string;
  modeCreation: string;
  classeActionCitoyenne: string;
  categorieAction: string;
  typePorteur: string;
  typeObject: string;
  thematiqueObject: string;
  translations: {
    titre: string;
    language: string;
    description: string;
    sousTitre: string;
    descriptionObjet: string;
  };
  objectifEnRechercheEnSignature: number;
  image: string;
  messageAssocie?: string;
  refMembre : Membre[];
  nombreContributions: number;
  dateProposition: Date | string;
  dateDebutDePublication: Date | string;
  dateFinPublication: Date | string;
  etatContribution: string;
  Contribution : Contribution[];
  message : message[]
  refreference : reference[]
  contenu : contenu[] 
  instruction ?: instruction[];
  Donnee ?: Donnee[]
}
