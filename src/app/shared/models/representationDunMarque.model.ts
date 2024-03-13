import { Parrainepar } from "./Parrainepar.model";
import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface representationDunMarque {
    refRepresentation: string; 
    typeRepresentation: string; 
    dateDebut: Date; 
    marque: string; 
    entreprise: string; 
    logo: string; 
    commentaire: string; 
    lien_associe: string; 
    acteur : acteurSocioEcanomique | string;
    parrainePar : Parrainepar | string;
  }
  