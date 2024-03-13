import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { FormControl, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { ContactCardComponent } from 'src/app/shared/components/cards/contact-card/contact-card.component';
import { FaqFormComponent } from 'src/app/shared/components/forum/faq-form/faq-form.component';
import { NavbarComponent } from 'src/app/shared/components/navbar-journal/navbar.component';
import { FaqService } from 'src/app/shared/services/faq.service';
import { QuestionsFAQ } from 'src/app/shared/models/faq.model';
import { TranslateModule } from '@ngx-translate/core';
import { QuestionReponseComponent } from 'src/app/shared/components/question-reponse/question-reponse.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    BreadcrumbModule,
    NavbarComponent,
    FormsModule,
    AccordionModule,
    InputTextModule,
    ContactCardComponent,
    FaqFormComponent,
    QuestionReponseComponent
  ],
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FAQsComponent {
  search: any;
  items: MenuItem[] | undefined;
  faqList: QuestionsFAQ[] = [];
  home: MenuItem | undefined;
  constructor(private faqService: FaqService) {}
  ngOnInit() {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/faq' };
    this.faqList = this.faqService.getFaqs();
  }
}
