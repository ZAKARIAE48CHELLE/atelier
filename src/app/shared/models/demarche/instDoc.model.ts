import { demarche } from "./demarche.model"
export interface instDoc {
  
translations : {
    Designation: string
    Description: string
}
Nombre_originale: number
Nombre_copie_conforme: number
Nombre_copie_simple : number
Duree_Validite : number
Unite_duree : string
monnaie : string
Indication_tarifaire : number
demarche : demarche
}