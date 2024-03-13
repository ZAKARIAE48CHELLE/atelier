import { ActionCitoyenne } from "./ActionCitoyenne.model";
import { Contribution } from "./contributions.model";
import { Membre } from "./membre.model";

export interface message{
    _id :string
    typeMessage : string;
    translations :{
        language : string;
        message :string;
        sujet : string;
    }
    actionCitoyenne: ActionCitoyenne | string
    contribution : Contribution[] | string[]
    protagoniste : Membre[] | string[]
    referenceEtDocumentDappuisEtPreuve: string[];
    createdAt?: Date | string;
    updatedAt?: Date | string;

}