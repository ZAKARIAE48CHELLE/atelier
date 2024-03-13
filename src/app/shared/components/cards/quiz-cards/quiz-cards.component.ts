import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { quiz } from 'src/app/shared/models/quiz.model';
import { QuizService } from 'src/app/shared/services/quiz.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-cards.component.html',
  styleUrls: ['./quiz-cards.component.scss']
})
export class QuizCardsComponent {
  quiz : quiz [] = []
  constructor(private QuizService: QuizService,private router: Router) {}

  ngOnInit(): void {
    this.loadQuiz()
  }
  loadQuiz() : void{
    this.QuizService.getquiz().subscribe((quiz)=> {
      this.quiz = quiz;
    });
  }

  goToDetails(id: string) {
    console.log('Navigating to details for ID:', id);
    this.router.navigate(['/det-quiz', id]);
  }
}
