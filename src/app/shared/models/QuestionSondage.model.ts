import { Choix } from "./Choix.model";
import { Sondage } from "./sondage.model";

export interface Question {
  _id: string;
  reference: string;
  translations: {
    language: string;
    labelQuestion: string;
    commentaire: string;
  };
  imageRepresentative: string;
  etatValidation: string;
  refSondage: Sondage | string;
  order: number;
  choix: Choix[];
}