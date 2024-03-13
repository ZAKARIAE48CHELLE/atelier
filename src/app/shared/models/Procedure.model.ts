import { PiecesDocument } from "./pieceDocument.model";

export interface Procedure {

  id: string;
  etatobjet: string;
  numEtape: number;
  translations: {
    language: string;
    designation: string;
    description: string;
  };
  pieceEtDoc: PiecesDocument | string;
  objetsAssocies: string[];
  createdAt: Date | string;
  updatedAt: Date | string;

}
