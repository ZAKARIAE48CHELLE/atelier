import { Horaire } from "./Horaire.model";
import { PiecesDocument } from "./pieceDocument.model";

export interface ServiceFourni {
  id: string;
  translations: {
    designation: string;
    description: string;
  };
  image: string;
  indication_tarifaire: string;
  indication_horaire: Horaire;
  indicationPiece: PiecesDocument[];
}