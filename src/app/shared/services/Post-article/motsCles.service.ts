import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MotsCles } from '../../models/motCle.model';


@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private motsCles: MotsCles[] = [
    
  ];

  getMotsclesForPostArticle(postArticleId: string): Observable<MotsCles[]> {
    // Filter sections based on the provided postArticleId

  }
  
}
