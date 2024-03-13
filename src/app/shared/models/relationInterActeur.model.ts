import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";

export interface relationInterActeur {
    typeRelation : string;
    acteurParent : acteurSocioEcanomique | string ;
    acteurAccocie : acteurSocioEcanomique[] ;
}