import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NavbarComponent } from '../../navbar-journal/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-faq-form',
  standalone: true,
  imports: [CommonModule,TranslateModule,DialogModule,NavbarComponent,InputTextareaModule,ButtonModule,ReactiveFormsModule,FormsModule,InputTextModule],
  templateUrl: './faq-form.component.html',
  styleUrls: ['./faq-form.component.scss']
})
export class FaqFormComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Implement your form submission logic here
      console.log('Form submitted with data:', this.contactForm.value);
      // You can send the form data to your backend or perform any other actions.
    } else {
      // Form is invalid, handle accordingly (show error messages, etc.)
    }
  }
}