import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl, FormsModule, NgModel } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TranslateModule } from '@ngx-translate/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule,ReactiveFormsModule,DropdownModule,InputNumberModule ,TranslateModule ,InputTextModule, FormsModule ,InputMaskModule, RadioButtonModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  personalInformation: any;
  structure : any[] =[]
  submitted: boolean = false;
  form !:FormGroup
  @Output() nextStep = new EventEmitter<any>();
  @Input() data : any
  @Input() acticatedIndex : any
  constructor( private router: Router , private fb : FormBuilder) {
    this.form = this.fb.group({
      type : ['particulier',[]],
      translations :this.fb.group({
        language : ['fr', []],
        nom: ['', Validators.required],
        prenom: ['', [Validators.required]],
        nomStructure : ['' , ],
      }),
      emailPersonel : ['', Validators.required],
      telephonePersonel : ['', Validators.required],
      structure: ['', ],
      emailStructure : ['', ],
      telephoneStructure : ['', ],
      numero: [, ],
  });
  
  
  this.form.get('type')?.valueChanges.subscribe((val) => { 
    
    console.log('this.form.get("type")?.value==============>',this.form.get('type')?.value);
    if( val == 'particulier'){
      this.form.get('nomStructure')?.clearValidators();
      this.form.get('nomStructure')?.updateValueAndValidity();
      this.form.get('emailStructure')?.clearValidators();
      this.form.get('emailStructure')?.updateValueAndValidity();
      this.form.get('telephoneStructure')?.clearValidators();
      this.form.get('telephoneStructure')?.updateValueAndValidity();
      this.form.get('numero')?.clearValidators();
      this.form.get('numero')?.updateValueAndValidity();
      this.form.get('structure')?.clearValidators();
      this.form.get('structure')?.updateValueAndValidity();
    }else{  
    this.form.get('nomStructure')?.setValidators(Validators.required);
    this.form.get('nomStructure')?.updateValueAndValidity();
    this.form.get('emailStructure')?.setValidators(Validators.required);
    this.form.get('emailStructure')?.updateValueAndValidity();
    this.form.get('telephoneStructure')?.setValidators(Validators.required);
    this.form.get('telephoneStructure')?.updateValueAndValidity();
    this.form.get('numero')?.setValidators(Validators.required);
    this.form.get('numero')?.updateValueAndValidity();
    
    this.form.get('structure')?.setValidators(Validators.required);
    this.form.get('structure')?.updateValueAndValidity();

    }
  })

  }




  ngOnInit() {
    console.log('////////',this.data);
    if(this.data) this.form.patchValue(this.data);
    
    this.structure = [
      {
        name : 'structure 1',
        value : "structureID1",
      },
      {
        name : 'structure 1',
        value : "structureID2",
      },
      {
        name : 'structure 1',
        value : "structureID3",
      },
      {
        name : 'structure 1',
        value : "structureID4",
      }
    ]
  }
  nextPage() {
      if ( this.form.valid ) {
        this.nextStep.emit(this.form.value); // Emit event to notify parent component

        console.log(this.form.value );
      }else{
        this.form.markAllAsTouched()
        console.log('error',this.form , Error ); 
      }
      this.submitted = true;
  }


}
