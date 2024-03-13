import { ActionCitoyenne } from "./ActionCitoyenne.model";
import { Membre } from "./membre.model";

export interface Contribution{
    _id : string;
    reference : string
    typeContribution : string[] ;
    DateHeur : Date;
    AffichageInformation : string[]
    MediaIntervention : string[]
    CanalIntervention : string[]
    Pays : string;
    etatDeValidation : string;
    actioncetoiyen : ActionCitoyenne | string;
    refMembre : Membre[];
}