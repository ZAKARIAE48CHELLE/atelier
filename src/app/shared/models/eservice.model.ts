import { CaracteristiqueDemandable } from "./CaracteristiqueDemandable.model";
import { ConditionParticuliere } from "./condetionParticulier.model";
import { reference } from "./reference.model";
import { taxonomie } from "./taxonomy.model";


export interface Eservice {
    _id: string;
    etatobjet: string;
    taxonomieEService: taxonomie; 
    moduleConcerne: string;
    translations: { 
        language: string;
        designationEService: string; 
        descriptif: string;
    };
    imageRepresentative: string;
    eServicePrincipal: Eservice | null;
    eServiceAssocie: Eservice[] | null;
    conditions: ConditionParticuliere[];
    docEtReference: string[];
    objetAssocie: string[];
    caracteristique: CaracteristiqueDemandable[];
    createdAt: Date | string;
    updatedAt: Date | string;
    [key: string]: any;
  }