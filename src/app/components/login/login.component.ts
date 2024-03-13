import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,

  imports: [CommonModule,TranslateModule,InputTextModule,ButtonModule,RouterModule],

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    LogInFrom !:  FormGroup
value : any;
   loading: boolean = false;

    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
    ngOnInit(){
        this.LogInFrom = this.fb.group({
            email : ["",Validators.required],
            password :["",Validators.required]
        })
    }
    constructor (private fb : FormBuilder){}
}
