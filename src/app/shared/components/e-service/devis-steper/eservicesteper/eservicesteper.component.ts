import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { PersonalComponent } from '../personal/personal.component';
import { DevisComponent } from '../devis/devis.component';
import { DocumentComponent } from '../document/document.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-eservicesteper',
  standalone: true,
  imports: [CommonModule,StepsModule,PersonalComponent,ReactiveFormsModule,DevisComponent,DocumentComponent],
  templateUrl: './eservicesteper.component.html',
  styleUrls: ['./eservicesteper.component.scss']
})
export class EservicesteperComponent {
  items!: MenuItem[];
  @Input() acteur : any
  @Input() products : any[] = []
  subscription!: Subscription;
  activadetIndex : number =0 ;
  form !:FormGroup
  
  constructor(private fb : FormBuilder) {

    this.form  = this.fb.group({
      personnel : [null , [Validators.required]],
      devis : [null , [Validators.required]],
      document : []
    })



  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => { console.log('changes',data);
    })
      this.items = [
          {
              label: 'Personal',
              command : ()=> {this.activadetIndex = 0}
            },
          {
              label: 'devis',
              command : ()=> {this.activadetIndex = 1}
            },
          {
              label: 'Document',
              command : ()=> {this.activadetIndex = 2}
            },
          
      ];

 
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }

  // Other properties and methods

  incrementIndex(event : any) {
    console.log('this.activadetIndex , event-----------',this.activadetIndex , event);
    
    if(this.activadetIndex == 0 && event){
      this.form.get('personnel')?.setValue(event);
    }
    if(this.activadetIndex == 1 && event){
      this.form.get('devis')?.setValue(event);
    }
    if(this.activadetIndex == 2 && event){
      this.form.get('document')?.setValue(event);
    }
    this.activadetIndex++;

  }
}
