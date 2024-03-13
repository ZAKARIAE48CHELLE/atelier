import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Sondage } from '../models/sondage.model';
@Injectable({
  providedIn: 'root',
})
export class SondageService {
  getSondage(): Sondage[] {
   return [
     {
       _id: '1',
       reference: '123456',
       translations: {
         designation: 'Sample Survey',
       },
       themeSondage: 'Sample Theme',
       dateOuverture: '2023-01-01',
       dateCloture: new Date('31/01/2024'.split('/').reverse().join('-')),
       imageRepresentatife: '../../../assets/images/about-image.jpg',
       questionsSondage: [
         {
           _id: 'q1',
           reference: 'q123',
           translations: {
             language: 'en',
             labelQuestion: 'What is your favorite color?',
             commentaire: 'Please choose one color.',
           },
           imageRepresentative: '../../../assets/images/fun-facts-bg.jpg',
           etatValidation: 'validated',
           refSondage: '1', // Set it directly to the parent survey object
           order: 1,
           choix: [
             {
               _id: 'c1',
               reference: 'c123',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c2',
               reference: 'c456',
               translations: {
                 language: 'en',
                 valeurChoix: 'Blue',
               },
               order: 2,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c6',
               reference: 'c124',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c7',
               reference: 'c1433',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
           ],
         },
         {
           _id: 'q3',
           reference: 'q123',
           translations: {
             language: 'en',
             labelQuestion: 'What is your favorite color?',
             commentaire: 'Please choose one color.',
           },
           imageRepresentative: '../../../assets/images/fun-facts-bg.jpg',
           etatValidation: 'validated',
           refSondage: '1', // Set it directly to the parent survey object
           order: 1,
           choix: [
             {
               _id: 'c1',
               reference: 'c123',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c2',
               reference: 'c456',
               translations: {
                 language: 'en',
                 valeurChoix: 'Blue',
               },
               order: 2,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c6',
               reference: 'c124',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c7',
               reference: 'c1433',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
           ],
         },
         {
           _id: 'q4',
           reference: 'q123',
           translations: {
             language: 'en',
             labelQuestion: 'What is your favorite color?',
             commentaire: 'Please choose one color.',
           },
           imageRepresentative: '../../../assets/images/fun-facts-bg.jpg',
           etatValidation: 'validated',
           refSondage: '1', // Set it directly to the parent survey object
           order: 1,
           choix: [
             {
               _id: 'sdf1',
               reference: 'ddf',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'cds2',
               reference: 'sdf',
               translations: {
                 language: 'en',
                 valeurChoix: 'Blue',
               },
               order: 2,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'c6',
               reference: 'sdfd',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
             {
               _id: 'csdf7',
               reference: 'sdff',
               translations: {
                 language: 'en',
                 valeurChoix: 'Red',
               },
               order: 1,
               nombreReponce: 0,
               refquestion: '1', // This is fine since it will be filled dynamically
             },
           ],
         },
         // Add more questions as needed
       ],
       participations: 'open',
       nbrParticipation: 0,
     },
     {
       _id: '2',
       reference: '654321',
       translations: {
         designation: 'Another Sample Survey',
       },
       themeSondage: 'Different Theme',
       dateOuverture: '2023-02-01',
       dateCloture: new Date('28/02/2021'.split('/').reverse().join('-')),
       imageRepresentatife: '../../../assets/images/equipe.jpg',
       questionsSondage: [
         {
           _id: 'q2',
           reference: 'q456',
           translations: {
             language: 'en',
             labelQuestion: 'Which animal is your favorite?',
             commentaire: 'Please choose your favorite animal.',
           },
           imageRepresentative: 'animal-question.jpg',
           etatValidation: 'validated',
           refSondage: '2',
           order: 1,
           choix: [
             {
               _id: 'c3',
               reference: 'c789',
               translations: {
                 language: 'en',
                 valeurChoix: 'Lion',
               },
               order: 1,
               nombreReponce: 20,
               refquestion: '2',
             },
             {
               _id: 'c4',
               reference: 'c012',
               translations: {
                 language: 'en',
                 valeurChoix: 'Dolphin',
               },
               order: 2,
               nombreReponce: 10,
               refquestion: '2',
             },
             {
               _id: 'c4',
               reference: 'c012',
               translations: {
                 language: 'en',
                 valeurChoix: 'Dolphin',
               },
               order: 2,
               nombreReponce: 10,
               refquestion: '2',
             },
             {
               _id: 'c4',
               reference: 'c012',
               translations: {
                 language: 'en',
                 valeurChoix: 'Dolphin',
               },
               order: 2,
               nombreReponce: 10,
               refquestion: '2',
             },
           ],
         },
         // Add more questions as needed
       ],
       participations: 'open',
       nbrParticipation: 4,
     },
   ];
  }
}