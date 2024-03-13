
import { CaracteristiqueDemandable } from "./CaracteristiqueDemandable.model";
import { Donnee } from "./Donnee.model";
import { GroupeCaracteristique } from "./GroupeCaracteristique.model";
import { acteurSocioEcanomique } from "./acteurSocioRcanomique.model";
import { Distinction } from "./distinction.model";
import { histoire } from "./histoire.model";

export interface instanceCaracteristique {
    _id: string;
    etatobjet?: string;
    groupe?: GroupeCaracteristique | string;
    caracteristique?: CaracteristiqueDemandable | string;
    translations?: { language?: string; label?: string; valeurChar?: string };
    valeurNotChar?: any;
    unite?: string;
    operateur: string;
    imageAssocie?: string;
    Donnee?: Donnee | string;
    distiction?: Distinction | string;
    acteur?: acteurSocioEcanomique | string;
    histoire?: histoire | string;
}