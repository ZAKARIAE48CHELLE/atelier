import { Question } from "./QuestionSondage.model";

export interface Sondage {
  _id: string;
  reference: string;
  translations: {
    designation: string;
  };
  themeSondage: string;
  dateOuverture: Date | string;
  dateCloture: Date | string;
  imageRepresentatife: string;
  questionsSondage: Question[];
  participations: string;
  nbrParticipation: number;
}