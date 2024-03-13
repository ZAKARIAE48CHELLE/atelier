import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface ConseilAdministration {

    id: string;
    etatobjet: string;
    civilite: string;
    translations:{
        language: string;
        nom: string;
        prenom: string;
        presentation: string;
      fonction: string;
    }
    photo: string;
    roleConseil: string;
    actionnaire: boolean;
    dateEntree: Date | string;
    enActivite: boolean;
    dateSortie: Date | string;
    refObjetAssocie: string[];
    refauteurSocioEconomique: acteurSocioEcanomique | string;
    createdAt: Date | string;
    updatedAt: Date | string;
  }