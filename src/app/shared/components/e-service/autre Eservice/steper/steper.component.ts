import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PersonalComponent } from '../../devis-steper/personal/personal.component';
import { EserviceChoiceComponent } from '../eservice-choice/eservice-choice.component';
import { ResumeComponent } from '../resume/resume.component';
import { DocumentStepComponent } from '../document-step/document-step.component';
import { CaracteristiqueComponent } from '../../../gestion-caracteristiques/add-caracteristique/caracteristique.component';
import { CaracteristiquesStepComponent } from '../caracteristiques-step/caracteristiques-step.component';

@Component({
  selector: 'app-steper',
  standalone: true,
  imports: [CommonModule, StepsModule, ReactiveFormsModule, PersonalComponent, EserviceChoiceComponent, DocumentStepComponent, ResumeComponent, CaracteristiquesStepComponent, CaracteristiqueComponent],
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent {
  selectedCharacteristics: any[] = []
  groupe: any[] = []
  selectedValuesFrom: any[] = []
  items!: MenuItem[];
  @Input() acteur: any
  @Input() products: any[] = []
  subscription!: Subscription;
  activadetIndex: number = 0;
  form !: FormGroup
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      personnel: [null, [Validators.required]],
      choice: [null, [/*Validators.required*/]],
      document: [[], []],
      caracteristiques: [[], []]
    })



  }
  handleGroupSelected(group: any) {
    this.groupe = group
  }
  handleCharacteristicsSelected(characteristics: any[]) {
    this.selectedCharacteristics = characteristics

  }
  newlySelectedCharacteristicSubmit(characteristics: any[]) {
    this.selectedValuesFrom = characteristics
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(data => { console.log('changes', data); })
    this.items = [
      {
        label: 'Personal',
        command: () => { this.activadetIndex = 0 }
      },
      {
        label: 'choix',
        command: () => { this.activadetIndex = 1 }
      },
      {
        label: 'caracteristiques',
        command: () => { this.activadetIndex = 2 }
      },
      {
        label: 'Document',
        command: () => { this.activadetIndex = 3 }
      },
      {
        label: 'resume',
        command: () => { this.activadetIndex = 4 }
      },
    ];
  }
  change(event: any) {
    console.log(this.form);

    console.log('event :::', event);

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  incrementIndex(event: any) {
    console.log('this.activadetIndex , event-----------', this.activadetIndex, event);
    if (this.activadetIndex == 0 && event) {
      this.form.get('personnel')?.setValue(event);
    }
    if (this.activadetIndex == 1 && event) {
      this.form.get('choice')?.setValue(event);
    } if (this.activadetIndex == 3 && event) {
      this.form.get('document')?.setValue(event.referenceForm);
    }
    if (this.activadetIndex == 2 && event) {
      this.form.get('caracteristiques')?.setValue(event.caracteristiques);
    }
    this.activadetIndex++;
    console.log('this.form ==========>', this.form);
  }

  disancrimentIndex(event: any) {
    console.log('this.activadetIndex ', this.activadetIndex, ' event-----------', event);
    if (this.activadetIndex == 0 && event) {
      this.form.get('personnel')?.setValue(event);
    }
    if (this.activadetIndex == 1 && event) {
      this.form.get('choice')?.setValue(event);
    } if (this.activadetIndex == 3 && event) {
      this.form.get('document')?.setValue(event.referenceForm);
    }
    if (this.activadetIndex == 2 && event) {
      this.form.get('caracteristiques')?.setValue(event);
    }
    this.activadetIndex--;
    console.log('this.form ==========>', this.form);
  }




}
