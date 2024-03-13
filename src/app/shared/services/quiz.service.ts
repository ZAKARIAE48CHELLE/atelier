// quiz.service.ts
import { Injectable } from '@angular/core';
import { quiz } from '../models/quiz.model'; 
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quiz : quiz [] = [
    {
    id: '1',  
    title : 'this is a test ?',
    image: '../../assets/images/team_02.jpg',
    nbrQuestion: 4,
    QuizQuestion : [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid'],
        answer: 'Paris',
      },
      {
        id: 2,
        question: 'test 1?',
        options: ['Berlin', 'Paris', 'Madrid', ],
        answer: 'Paris',
      },
      {
        id: 3,
        question: 'test 2?',
        options: ['dfhjdhf', 'Paris', 'Madrid'],
        answer: 'Paris',
      },
    ]
  },
  {
    id: '2',  
    title : 'this is a test ?',
    image: '../../assets/images/team_02.jpg',
    nbrQuestion: 4,
    QuizQuestion : [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid'],
        answer: 'Paris',
      },
      {
        id: 2,
        question: 'test 1?',
        options: ['Berlin', 'Paris', 'Madrid', ],
        answer: 'Paris',
      },
      {
        id: 3,
        question: 'test 2?',
        options: ['dfhjdhf', 'Paris', 'Madrid'],
        answer: 'Paris',
      },
    ]
  },{
    id: '3',  
    title : 'this is a test ?',
    image: '../../assets/images/team_02.jpg',
    nbrQuestion: 4,
    QuizQuestion : [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid'],
        answer: 'Berlin',
      },
      {
        id: 2,
        question: 'test 1?',
        options: ['Berlin', 'Paris', 'Madrid', ],
        answer: 'Paris',
      },
      {
        id: 3,
        question: 'test 2?',
        options: ['dfhjdhf', 'Paris', 'Madrid'],
        answer: 'dfhjdhf',
      },
    ]
  }
  ]
  getquiz(): Observable<quiz[]> {
    return of(this.quiz);
  }
 

  getQuizById(id: string): Observable<quiz | undefined> {
    console.log('Fetching petiteAnnonce by ID:', id);
    const selectedQuiz = this.quiz.find((quiz) => quiz.id === id);
    console.log('Selected petiteAnnonce:', selectedQuiz);
    return of(selectedQuiz);
  }
}
