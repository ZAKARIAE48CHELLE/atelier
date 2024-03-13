import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaCommonModule } from 'ng-recaptcha/lib/recaptcha-common.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule , TranslateModule , ReactiveFormsModule , FormsModule ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
@Input() reclamation : any 
personel : any;
sujetMessage : any
caracteristiques : any[] = []
carasValues : any[] = []
form !: FormGroup



ngOnInit() {
  console.log('-----------', this.reclamation);
  
  // Assuming this.reclamation is properly initialized before this point
  if (this.reclamation) {
    this.personel = this.reclamation.get('personnel').value;
    this.sujetMessage = this.reclamation.get('sujetMesage').value;
    
    // Assuming sujetMessage is an object with a property 'caracteristiques'
    this.caracteristiques = this.sujetMessage.caracteristiques;
    
    console.log('this.personel', this.personel);
    console.log('this.sujetMessage', this.sujetMessage);
    console.log('this.caracteristiques ::::::>>>>', this.caracteristiques);

    // Initialize form controls with values
    this.form.patchValue({
      personnel: this.personel,
      sujetMessage: this.sujetMessage // Assuming this is correct, otherwise adjust accordingly
    });

    if (this.caracteristiques) {
      for (let cara of this.caracteristiques) {
        let val = cara.value || cara;
        this.carasValues.push(val);
      }
      console.log('------------- carasValues -------------', this.carasValues);
    }
  }
}

constructor(private fb : FormBuilder){
this.form = this.fb.group({
  personnel : [ this.personel, [Validators.required]],
  sujetMessage : [this.sujetMessage, [Validators.required]],
})
}



submit(){
  console.log('================================================================' , this.form);
}



}
