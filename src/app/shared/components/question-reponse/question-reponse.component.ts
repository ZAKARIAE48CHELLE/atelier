import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsFAQ } from '../../models/faq.model';
import { FaqService } from '../../services/faq.service';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-question-reponse',
  standalone: true,
  imports: [CommonModule,
    TranslateModule,
    FormsModule,
    AccordionModule,

  ],
  templateUrl: './question-reponse.component.html',
  styleUrls: ['./question-reponse.component.scss']
})
export class QuestionReponseComponent {
  faqList: QuestionsFAQ[] = [];
  @Input() questionReponce : any [] = []
  
  constructor(private faqService: FaqService ){

    if(this.questionReponce.length){
      this.faqList = this.questionReponce;
    }else{
      this.faqList = this.faqService.getFaqs();
    }

  }
}
