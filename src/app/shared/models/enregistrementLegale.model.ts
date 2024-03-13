import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface enregistrementLegale{
    
    taconomieEnregistrementLegal : string;
    paysEnregistrement : string;
    dateEnregistrement: string
    labelEnregistrement : string;
    numeroEnregistrement : string;
    acteur : acteurSocioEcanomique | string;
    
}