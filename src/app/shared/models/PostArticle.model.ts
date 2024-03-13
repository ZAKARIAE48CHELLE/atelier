import { Section } from "./section.model";
import { MotsCles } from "./motCle.model";

export interface PostArticle {
  _id: string;
  titreArticle: string;
  sousTitreArticle: string;
  resumeArticle: string;
  datePublication: Date | string;
  photoArticle: string;
  nomAuteur : string;
  auteurImage: string;
  titreImage : string;
  typeContenue: string;
  contenueArticle: string;
  sections: Section[]; 
  motsCles: MotsCles[];
}
