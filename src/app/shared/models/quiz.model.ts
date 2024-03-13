export interface quiz {
  id: string
  title : string;
  image : string;
  nbrQuestion: number;
  QuizQuestion : QuizQuestion[]
  
}
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
}
