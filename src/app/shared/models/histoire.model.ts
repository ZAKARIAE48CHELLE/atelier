import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { Distinction } from "./distinction.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";

export interface histoire {
    date : Date;
    translation :{
        language :string;
        titre : string;
        commenteire : string

    }
    image  : string;
    acteur : acteurSocioEcanomique | string;
    distinction : Distinction[]
    instanceCaracteristique ?: instanceCaracteristique[]
}