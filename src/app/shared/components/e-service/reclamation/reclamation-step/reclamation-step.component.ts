import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PersonalComponent } from '../../devis-steper/personal/personal.component';
import { SujetMessageComponent } from '../sujet-message/sujet-message.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-reclamation-step',
  standalone: true,
  imports: [CommonModule, StepsModule, ReactiveFormsModule, PersonalComponent, SujetMessageComponent, ResumeComponent],
  templateUrl: './reclamation-step.component.html',
  styleUrls: ['./reclamation-step.component.scss']
})
export class ReclamationStepComponent {
  items!: MenuItem[];
  @Input() acteur: any
  @Input() products: any[] = []
  subscription!: Subscription;
  activadetIndex: number = 0;
  form !: FormGroup
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      personnel: [null, [Validators.required]],
      sujetMesage: [null, [Validators.required]],
    })



  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => {
      console.log('changes', data);
    })
    this.items = [
      {
        label: 'Personal',
        command: () => { this.activadetIndex = 0 }
      },
      {
        label: 'Sujet et Message',
        command: () => { this.activadetIndex = 1 }
      },
      {
        label: 'resume',
        command: () => { this.activadetIndex = 2 }
      },
    ];


  }
  change(event: any) {
    console.log(this.form);

    console.log('event :::: ', event);


  }




  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Other properties and methods

  incrementIndex(event: any) {
    console.log('this.activadetIndex , event-----------', this.activadetIndex, event);
    if (event) {
      if (this.activadetIndex == 0) {
        this.form.get('personnel')?.setValue(event);
      }
      else if (this.activadetIndex == 1) {
        this.form.get('sujetMesage')?.setValue(event);
      }
      this.activadetIndex++;
    }
  }





}
