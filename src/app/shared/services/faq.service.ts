import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsFAQ } from '../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
    getFaqs() : QuestionsFAQ[] {
      return [
 {
    question: "What is Lorem Ipsum?",
    reponse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    question: "Why do we use it?",
    reponse: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    question: "Where does it come from?",
    reponse: "Contrary to popular belief, Lorem Ipsum is not simply random text."
  },
  {
    question: "Is it readable?",
    reponse: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
  },
  {
    question: "What are the origins of Lorem Ipsum?",
    reponse: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },
  {
    question: "How to use Lorem Ipsum?",
    reponse: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
  },{
    question: "How to install Angular CLI?",
    reponse: "You can install Angular CLI using the command 'npm install -g @angular/cli'."
  },
  {
    question: "What is TypeScript?",
    reponse: "TypeScript is a superset of JavaScript that adds static typing to the language."
  },
  {
    question: "How to create a new Angular project?",
    reponse: "To create a new Angular project, run 'ng new project-name' in the terminal."
  },
  {
    question: "What is the Angular component?",
    reponse: "An Angular component is a building block of an Angular application, representing a part of the user interface."
  },
  {
    question: "How to handle forms in Angular?",
    reponse: "Angular provides the FormsModule for handling forms. You can use ngModel for two-way data binding."
  },
  {
    question: "What is dependency injection in Angular?",
    reponse: "Dependency injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself."
  },
    ]
  }

    
}
