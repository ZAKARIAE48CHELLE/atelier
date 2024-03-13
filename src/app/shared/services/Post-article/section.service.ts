import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Section } from '../../models/section.model'; 

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private sections: Section[] = [
    {
      id: '1',
      titreSection: 'Section 1',
      soustitreSection: '',
      contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
      postArticleId: '1',
      typeContenue:'formaté html',
      sectionPrincipale: '',
      sectionChildren: [
        {
          id: '3',
          titreSection: 'Section 1 of 1',
          soustitreSection: '',
          contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
          postArticleId: '1',
          typeContenue:'',
          sectionPrincipale: '1',
          sectionChildren: []
        },
        {
          id: '4',
          titreSection: 'Section 2 of 1',
          soustitreSection: '',
          contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
          postArticleId: '1',
          typeContenue:'',
          sectionPrincipale: '1',
          sectionChildren: []
        }
      ]
    },
    {
      id: '2',
      titreSection: 'Section 2',
      soustitreSection: '',
      contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
      postArticleId: '1',
      typeContenue:'formaté html',
      sectionPrincipale: '',
      sectionChildren:[ {
        id: '5',
        titreSection: 'Section 2 of 1',
        soustitreSection: '',
        contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
        postArticleId: '1',
        typeContenue:'',
        sectionPrincipale: '1',
        sectionChildren: []
      }]
    }
   
    // Add more sections as needed
  ];
     private possibleTypeContenueValues: string[] = ['formaté html', 'par section',];
     getPossibleTypeContenueValues(): string[] {
     return this.possibleTypeContenueValues;
    }
  getSectionsForPostArticle(postArticleId: string): Observable<Section[]> {
    console.log('=======================',this.getSectionsForPostArticle, 'id')
    // Filter sections based on the provided postArticleId
    const sectionsForPostArticle = this.sections.filter(section => section.postArticleId === postArticleId);
    return of(sectionsForPostArticle);
  }
  
}
