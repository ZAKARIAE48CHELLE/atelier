import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model"

export interface conditionPaiment {

    ordreDeTranche: number
    pourcentage: number
    labelPeriode: string
    vleur: number
    uniteDeValeur: string
    montantHtAssocie: number
    tauxTVAassocie: number
    order : number
    modePaiment : string
    acteur: acteurSocioEcanomique | string;

}