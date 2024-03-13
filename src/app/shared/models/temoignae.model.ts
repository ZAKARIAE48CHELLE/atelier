import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface Temoignage {
  id: string;
  reftemoignage ?:string
  translations: {
    language: string;
    nom: string;
    prenom: string;
    temoignage: string;
    entreprise: string;
  }
    fonction : string;
    email: string;
    date: Date | string;
    photo: string;
    logo: string;
    lienAssocie: string;
    typeObjetConcerne: string;
    objetAssocie: string[];
    etatobjet: string;
  acteur ?:acteurSocioEcanomique | string 

}
