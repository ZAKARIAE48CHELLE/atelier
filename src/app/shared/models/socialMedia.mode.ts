import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface SocialMedia {
    id: string;
    etatDePublication: string;
    typeSocialMedia: string;
    translations: {
      language: string;
      designation: string;
      descriptif: string;
    };
    logo: string;
    lien: string;
    etatFonctionnement: string;
    etatobjet: string;
    typeObjetConcene: string;
    objetAssocie: string[];
    createdAt: Date | string;
    updatedAt: Date | string;
    acteur : acteurSocioEcanomique | string;
  }
  