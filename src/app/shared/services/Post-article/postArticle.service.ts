import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostArticle } from '../../models/PostArticle.model';
import { SectionService } from './section.service';

@Injectable({
  providedIn: 'root'
})
export class PostArticleService {
  private postArticles: PostArticle[] = [
    {
      _id: '1',
      titreArticle: 'I thought I was having an anxiety attack. It was a ‘widowmaker.’',
      sousTitreArticle: 'The classic symptoms of a heart attack are chest pain and pressure, but they’re not the only red flags',
      resumeArticle: 'My best friend is a retired emergency room doctor, and he has seen it all. Yet when I met him for a weekend walk recently and told him I wasn’t feeling well, he and I both attributed my symptoms to anxiety.',
      datePublication: 'November 27,2023 at 9:00 AM',
      photoArticle: 'assets/images/single_service_01.jpg',
      auteurImage:'Mark Shavin',
      nomAuteur :'Mark Shavin',
      titreImage : 'Elizabeth von Oehsen/The Washington Post',
      typeContenue :'code_399',
      contenueArticle: 'Western diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, Benjamin Netanyahu, causing consternation in the Biden administration. Indeed, Israel is so hostile to the PA that it banned the authority’s foreign minister from travelling this month to Bahrain to speak to a conference attended by US and Arab leaders on its post-war plans. The PA – established in the 1990s as part of the then peace process to run areas in the West Bank and Gaza under Palestinian control – has said it is willing to play a role in Gaza, from where it was expelled by Hamas in 2006, but only if it is part of a clear, comprehensive peace plan with Israel that also includes the West Bank. But many doubt its ability to do so, even if there were such a plan. Nasser al-Qudwa, a nephew of Yasser Arafat tipped as future PA leader, said: “I think the current authority, in its present form and with the men leading it, is unable to even set foot in the Gaza Strip, let alone handle the major tasks required at this time.” Other observers, such as former Israel negotiator Daniel Levy, counsel the PA against entering Gaza if security remains an Israeli preserve, as Netanyahu has insisted it will. “I don’t think it would be wise for any Palestinian movement to say: ‘We will do this under the watchful eye of Israel,’” he said.',
      sections: [
         {
      id: '1',
      titreSection: 'Section 1',
      soustitreSection: '',
      contenuSection: 'estern diplomats have turned to the previously neglected Palestinian Authority to fill the political vacuum likely to be created by the planned destruction of Hamas in Gaza, but know their chosen rescue vehicle is unpopular, deemed corrupt, and badly in need of a new generation of leaders that no one has yet been able to identify. west’s placement of the PA at the heart of post-conflict governance in Gaza has also been rejected by the Israeli prime minister, ',
      postArticleId: '1',
      typeContenue:'code_398',
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
      ], // Initialize as an empty array
      motsCles: [{
        motsCles: 'Keyword1',
        description : 'string dfshifuyb ssf sefuhfiuhseif uehfiehfiehfhsif hfisehfisefhsfs fsfsfsfqwq aaf',
        lien : 'https://www.google.com/'
      },{
        motsCles: 'Keyword2',
        description : 'string',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string sf isf hsfi hfis csbhhgdf hfbbf hdfhihfsf fsf',
        lien : ''
      },{
        motsCles: 'Keyword3',
        description : 'string',
        lien : ''
      }
    ],
    },
  ];


  constructor(private sectionService: SectionService) {}

  getPostArticles(): Observable<PostArticle[]> {
    const postArticleObservables = this.postArticles.map(postArticle => {
      // For each post article, fetch its associated sections
      return this.sectionService.getSectionsForPostArticle(postArticle._id).pipe(
        map(sections => {
          postArticle.sections = sections;
          return postArticle;
        })
      );
    });

    // Use forkJoin to combine multiple observables into a single observable
    return forkJoin(postArticleObservables);
  }

  getArticleById(id: string): Observable<PostArticle | undefined> {
    console.log('Fetching petiteAnnonce by ID:', id);
    const selectedArticle = this.postArticles.find((article) => article._id === id);
    console.log('Selected petiteAnnonce:', selectedArticle);
    return of(selectedArticle);
  }
}
