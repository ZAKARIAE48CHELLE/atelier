import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl, FormsModule, NgModel } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { BlockUIModule } from 'primeng/blockui';
import { AnimateModule } from 'primeng/animate';
import { DockModule } from 'primeng/dock';
import { CountryService } from 'src/app/shared/services/country.service';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
  RadioButtonModule,
		BlockUIModule,
    DockModule,
    AnimateModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
    
    PasswordModule,InputTextModule,FormsModule,ReactiveFormsModule,DividerModule,ButtonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {

  type = 'Personnel';

  value : any;
  countries: any[] = [];
  value10: any;
  filteredCountries: any[] = [];
  searchControl = new FormControl();
  registerForm !: FormGroup 

  constructor(private countryService: CountryService, private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      type : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
    })

    
    
    
  }
  ngOnChange(){
    console.log(this.type);
    
  }
ngOnInit() {
    this.countries = this.countryService.getCountry()
  }


  onSignUp() {
    if (this.registerForm.valid) {
      // Handle form submission
      console.log(this.registerForm.value);
    } else {
      // Handle form validation errors
      this.registerForm.markAllAsTouched();
    }
  }
  
}





