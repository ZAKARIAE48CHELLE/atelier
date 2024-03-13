export interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  parentComment?: string
  Notation:number;
  replies: Comment[];
}
