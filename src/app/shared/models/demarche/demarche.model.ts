import { instDoc } from "./instDoc.model";
export interface demarche{
  _id: string;
  taxoGeographique  : string
  taxoDemarche : string
  transalations : {
    designation : string
    description : string
  }
  image_representative : string
  delai_Moyen : number
  uniteDelai : string
  cout_Moyen : number
  monnaie : string
  pieceDoc : instDoc []
}