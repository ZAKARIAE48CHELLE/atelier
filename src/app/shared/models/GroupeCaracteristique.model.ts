import { CaracteristiqueDemandable } from "./CaracteristiqueDemandable.model";
import { domain } from "./domain.model";

export interface GroupeCaracteristique {
    _id: string;
    ordre : number;
    etatobjet?: string;
    reference?: string;
    translations: { language: string; designation: string; description?: string };
    etatValidation?: string;
    caracteristiques: CaracteristiqueDemandable[];
    parent?: GroupeCaracteristique | null;
    icon?: string
    sousGroupe?: GroupeCaracteristique[];
    domain: domain | string
    CreatedAt : Date

}