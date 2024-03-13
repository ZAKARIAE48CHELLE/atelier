import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { liensUtiles } from '../models/liens-utiles.model';

@Injectable({
  providedIn: 'root',
})

export class liensUtilesService{
    private lien : liensUtiles[] = [
      {
        _id: '1',
        translations: {
          designation: 'Example Designation 1',
          description: 'Linkedin est un site de réseautage social  qui a été fondé en décembre 2002 et est devenu opérationnel le 5 mai 2003. Le site est principalement utilisé comme réseau professionnel. En juin 2012, le site comptait plus de 176 millions de membres inscrits dans plus de 200 pays. ',
          services:' Créer des contacts artager du contenu Faites appel à des experts en utilisant des combos Gérer votre réputation en ligne Posez des questions aux experts Participation et organisation dévénements'
        },
        logo: 'assets/images/service_03.jpg',
        images: ['image1.jpg', 'image2.jpg'],
        valeurLien: 'https://www.youtube.com/',
        
      },
      {
        _id: '2',
        translations: {
          designation: 'anass',
          description: 'anass est un site de réseautage social  qui a été fondé en décembre 2002 et est devenu opérationnel le 5 mai 2003. Le site est principalement utilisé comme réseau professionnel. En juin 2012, le site comptait plus de 176 millions de membres inscrits dans plus de 200 pays. ',
          services:' Créer des contacts artager du contenu Faites appel à des experts en utilisant des combos Gérer votre réputation en ligne Posez des questions aux experts Participation et organisation dévénements'
        },
        logo: 'assets/images/home.jpg',
        images: ['image1.jpg', 'image2.jpg'],
        valeurLien: 'http://localhost:4200/det',
        
      },
      
  
    ]
    getLiens(): Observable<liensUtiles[]> {
        return of(this.lien);
      }
}