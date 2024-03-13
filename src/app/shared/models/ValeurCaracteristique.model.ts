import { CaracteristiqueDemandable } from "./CaracteristiqueDemandable.model";

export interface ValeurCaracteristique {
    _id: string;
    etatobjet: string;
    reference: string;
    translations: { language: string; valeur: string}
    default: boolean;
    caracteriristique: CaracteristiqueDemandable | null;
    imageAssocie: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    [key:string]:any
}