import { AdressesUtiles } from "./adresseUtil.model";
import { PiecesDocument } from "./pieceDocument.model";
export interface InstancePiece{
   type :string;
   refPiece : PiecesDocument | string;
   translations: {
    language : string
    designation : string
    description : string
   }
   nbrOriginale :number
   nbrCopieConforme : number
   nbrCompieSimple : number
   typeDureeValidite : string
   dureeValidite: number  
   uniteTemps : string
   indicationTarifaire : number
   monnaire : string
   demarcheObtention : string | null;
   demarche : string | null;
   adressUtiles?: AdressesUtiles | string;
   objetAssocie?:string


}
