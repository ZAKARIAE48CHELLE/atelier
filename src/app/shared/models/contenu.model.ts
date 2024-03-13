import { ActionCitoyenne } from "./ActionCitoyenne.model";

export interface contenu {
    id: string;
    etatDePublication: string;
    etatobjet: string;
    categorie: string;
    classe: string;
    type: string;
    format: string;
    provenance: string;
    phaseConcerne: string;
    translations: {
        language: string;
        sousTitre: string;
        titre: string;
        descriptif: string;
        auteur: string;
    }

    fichier: string;
    lienAccess: string;
    taille: number;
    unite: string;
    nbrPage: number;
    dureeLectureEnMin: number;
    imageAssociee: string;
    dateEnregistrement: Date | string;
    dateEdition: Date | string;
    avecValidite: boolean;
    validite: {
        debutValidite: Date | string;
        finValidite: Date | string;
        etatValidite: string;
    };
    etatValidation: string;
    dateValidation: Date | string;
    statistiquesDirectes: string[];
    etats: string[];
    createdAt: Date | string;
    updatedAt: Date | string;
    [key: string]: any;
    datePublication: Date | string;
    contenuMMedia: string[];
    objetsConcernes: string[];
    objetsAssocies: string[];
    moments: string[];
    actionCitoyenne: ActionCitoyenne | string;
}






