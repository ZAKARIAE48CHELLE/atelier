import { Donnee } from "./Donnee.model";

export interface sourceInformation{
    typeSourceInformation : string ;
    translations :{
        designation : string
        description : string
    }
    degreDeCredibilite : number;
    etatExistanceSource : string;
    Donnee : Donnee | string
}