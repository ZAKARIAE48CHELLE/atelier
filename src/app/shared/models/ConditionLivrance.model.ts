import { PiecesDocument } from "./pieceDocument.model";

export interface ConditionDelivrance {
  _id : string;
  piece: PiecesDocument | string;
  code_type: string;
  operateur: string;
  valeurS: string;
  unite_de_valeur: string;
}
