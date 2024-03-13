import { ValeurCaracteristique } from "./ValeurCaracteristique.model";
import { instanceCaracteristique } from "./instanceCaracteristique.model";
import { taxonomie } from "./taxonomy.model";

export interface CaracteristiqueDemandable {
    _id: string;
    etatobjet: string;
    reference: string;
    translations: { language: string; label: string; defautleuchar: string | null };
    natureInfo: string;
    typeInfo: string;
    defaultValeurNotChar: any;
    minVal: any;
    maxVal: any;
    unite: string;
    operateur: string;
    groupe: string;
    taxonomie : taxonomie | string;
    valeurs: ValeurCaracteristique[];
    etatValidation: string;
    imageAssocie: string;
    instanceCaracteristiques: instanceCaracteristique[];
}