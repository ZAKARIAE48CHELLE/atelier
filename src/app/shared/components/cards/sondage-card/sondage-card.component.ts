import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SondageService } from 'src/app/shared/services/Sondage.service';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormControl, FormsModule } from '@angular/forms';
import { Question } from 'src/app/shared/models/QuestionSondage.model';
import { ButtonModule } from 'primeng/button';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { TranslateModule } from '@ngx-translate/core';
import { Choix } from 'src/app/shared/models/Choix.model';
@Component({
  selector: 'app-sondage-card',
  standalone: true,
  imports: [
    CommonModule,
    RadioButtonModule,
    ProgressBarModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './sondage-card.component.html',
  styleUrls: ['./sondage-card.component.scss'],
})
export class SondageCardComponent {
  

  Sondages: any[] = [];
  currentDate = new Date();
  selectedChoicesList: { [questionId: string]: string | null }[] = []; // Allow null for the return type
  currentQuestionIndex: number =0; // Add this to keep track of the current question

  isDateBefore(dateString: string): boolean {
    const currentDate = new Date();
    const inputDate = new Date(dateString);
    return currentDate < inputDate;
  }

  constructor(private sondageService: SondageService) {
    console.log(this.currentDate);
  }

  ngOnInit() {
    this.Sondages = this.sondageService.getSondage();
    // Initialize selectedChoicesList for each Sondage instance
    this.selectedChoicesList = this.Sondages.map(
      () => ({} as { [questionId: string]: string | null })
    );
  }

  getSelectedChoiceId(surveyId: string, questionId: string): string | null {
    const index = this.Sondages.findIndex((s) => s._id === surveyId);
    if (index === -1 || !this.selectedChoicesList[index]) {
      return null; // or handle it accordingly
    }
    return this.selectedChoicesList[index][questionId] || null; // Handle undefined as well
  }

  setSelectedChoiceId(index: number, questionId: string, choiceId: string) {
    console.log(
      `Setting choice for Sondage ${index}, Question ${questionId} to: ${choiceId}`
    );
    if (!this.selectedChoicesList[index]) {
      this.selectedChoicesList[index] = {};
    }
    this.selectedChoicesList[index][questionId] = choiceId;
  }
  

  calculatePercentage(totalResponses: number, choice: Choix): number {
    return totalResponses > 0
      ? (choice.nombreReponce / totalResponses) * 100
      : 0;
  }

  logModelChange(newValue: any, questionId: string) {
    console.log(
      `Model changed for Question ${questionId}. New value: ${newValue}`
    );
  }
  submit(surveyId: string) {
    const sondage = this.Sondages.find((s) => s._id === surveyId);
    if (!sondage) {
      console.error(`Survey with ID ${surveyId} not found.`);
      return;
    }
  
    let questions = sondage.questionsSondage;
  
    // Check if the current question is the last one
    if (this.currentQuestionIndex === questions.length - 1) {
      // Process the answers for each question
      questions.forEach((question: Question) => {
        let selectedChoiceId = this.getSelectedChoiceId(surveyId, question._id);
        let selectedChoice = question.choix.find((choice) => choice._id === selectedChoiceId);
        if (selectedChoice) {
          selectedChoice.nombreReponce++;
        }
      });
  
      // Simulate sending survey results to the database
      const surveyResults = {
        surveyId: surveyId,
        selectedChoicesList: this.selectedChoicesList,
      };
  
      console.log('Simulating API call to submit survey results:', surveyResults);
  
      // Reset selected choices after updating nombreReponce
      this.selectedChoicesList = this.Sondages.map(() => ({}));
      
      // Reset the current question index
      this.currentQuestionIndex = 0;
   //   // Reset selected choices after updating nombreReponce
       this.selectedChoicesList = this.Sondages.map(() => ({}));
     // Implement any additional logic needed after submitting the survey
    } else {
      // Move to the next question
      this.currentQuestionIndex++;
      console.log('======',this.currentQuestionIndex);
  
    }
  }
  
  
  }

