import { ActionCitoyenne } from "./ActionCitoyenne.model";
import { Contribution } from "./contributions.model";

export interface Membre {
  id: string;
  translations: {
    nom: string;
    prenom: string;
    adresse: string;
    aPropos: string;
    language: string;
  };
  refActionCitoyenn ?: ActionCitoyenne | string;
  reference: string;
  typeMembre: string;
  salutation: string;
  statut: string;
  dateNaissanceOuCreation: Date | string;
  fonctionOuSecteurActivite: string;
  photo0uLogo: string;
  pays: string;
  region: string;
  prouvince: string;
  ville: string;
  codePostal: string;
  email: string;
  note: number;
  active: boolean;
  commentaire: string;
  memberParent: Membre | string;
  sousMembres: { relationType: string; membres: Membre[] };
  objetAssoccie: string[];
  compteUser: string[];
  etatDePublication: string;
  contribution?: Contribution | string;
}
