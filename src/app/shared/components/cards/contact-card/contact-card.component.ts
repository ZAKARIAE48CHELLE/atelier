import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqFormComponent } from '../../forum/faq-form/faq-form.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, DialogModule,ButtonModule,FaqFormComponent,TranslateModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}
