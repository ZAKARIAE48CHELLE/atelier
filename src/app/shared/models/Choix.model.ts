import { Question } from "./QuestionSondage.model";

export interface Choix {
  _id: string;
  reference: string;
  translations: {
    language: string;
    valeurChoix: string;
  };
  order: number;
  nombreReponce: number;
  refquestion: Question | string;
}