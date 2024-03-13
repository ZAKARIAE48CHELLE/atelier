import { instanceCaracteristique } from "./instanceCaracteristique.model";
import { reference } from "./reference.model";
import { sourceInformation } from "./sourceInformation.model";

export interface Donnee {
    CategorieDesDonnees : string;
    translations : {
        titre : string
        description : string
    }
    instanceCaracteristique : instanceCaracteristique[];
    sourceInformation : sourceInformation[];
    referenceDocument : reference[]

}