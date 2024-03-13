import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { representationDunMarque } from "./representationDunMarque.model";
import { Temoignage } from "./temoignae.model";

export interface Parrainepar { 
    _id  : string;
    categorieParrain : string;
    nom : string;
    commentaire : string;
    image : string;
    representaionDuneMarque : representationDunMarque[]
    acteur : acteurSocioEcanomique | string
    temoignage : Temoignage[];
}