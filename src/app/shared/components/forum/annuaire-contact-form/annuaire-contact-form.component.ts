import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NavbarComponent } from '../../navbar-journal/navbar.component';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MapComponent } from '../../map/map.component';
@Component({
  selector: 'app-annuaire-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    DialogModule,
    NavbarComponent,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    MapComponent
  ],
  templateUrl: './annuaire-contact-form.component.html',
  styleUrls: ['./annuaire-contact-form.component.scss'],
})
export class AnnuaireContactFormComponent {
  contactForm!: FormGroup;
  ActeurEmail: any;
  longitude : any;
  latitude : any ;
  telephone : any;
  whatsapp : any;
  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      ActeurEmail: [{ value: this.ActeurEmail , disabled : true}, []],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      Object: ['', [Validators.required]],
    });
    this.ActeurEmail = this.config.data.ActeurEmail ;
    this.longitude = this.config.data.longitude ;
    this.latitude = this.config.data.latitude ;
    this.telephone = this.config.data.telephone ;
    this.whatsapp = this.config.data.whatsapp ;

    this.contactForm.patchValue({
     ActeurEmail: this.ActeurEmail
   });
  }
  

onSubmit() {
  if (this.contactForm.valid) {
    const formData = this.contactForm.value;
    const mailtoLink = `mailto:${this.ActeurEmail}?subject=${encodeURIComponent(formData.Object)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0ASent by: ${encodeURIComponent(formData.email)}`;
    window.open(mailtoLink, '_blank');
    console.log('mailtoLink', mailtoLink);

    console.log('Form submitted with data:', formData);
  } else {
    // Handle invalid form
  }
}
}
