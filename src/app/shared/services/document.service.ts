// quiz.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { document } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private doc : document [] = [
    {
      id: '',
    translations: {
        titre : 'Contrat CDD',
        Description : 'Modèle de contrat à durée déterminée (CDD) ',
        langue : 'ar',
    },
    image : 'assets/images/Sans titre.png'  ,
    taille :0 ,
    format: 'PDF',
    datePubications : new Date(),
    auteur:'Kate Midlestone',
    documentUrl:'assets/data/bootstrap-support.pdf',
    documentTelecharger: true,
    }
  ]
  getDocuments(): Observable<document[]> {
    return of(this.doc);
  }
 

  getDocumentById(id: string): Observable<document | undefined> {
    console.log('Fetching petiteAnnonce by ID:', id);
    const selectedDocument = this.doc.find((quiz) => quiz.id === id);
    console.log('Selected petiteAnnonce:', selectedDocument);
    return of(selectedDocument);
  }
}
