import { ConditionDelivrance } from "./ConditionLivrance.model";
import { Procedure } from "./Procedure.model";
import {InstancePiece} from "./instancePiece.model"
export interface PiecesDocument {
  id: string;
  etatDePublication: string;
  etatobjet: string;
  taxonomieGeographique: string[];
  taxonomie: string;
  translations: {
    language: string;
    designation: string;
    description: string;
  };
  image: string;
  formatDelivrance: string;
  payant: boolean;
  tarifMoyenne: number;
  delaiMoyenObtention: number;
  uniteDelai: string;
  typeDureeValidite: string;
  dureeValidite: number;
  uniteDureeValidite: string;
  pieceParent?: PiecesDocument | null;
  pieceAssocie?: PiecesDocument[] | null;
  procedures: Procedure[];
  objetAssocie: string[];
  conditionDelivrance: string[];
  etats: string[];
  condition: ConditionDelivrance[] ; 
  createdAt: Date | string;
  updatedAt: Date | string;
  instancePiece : InstancePiece[] | null;
}
