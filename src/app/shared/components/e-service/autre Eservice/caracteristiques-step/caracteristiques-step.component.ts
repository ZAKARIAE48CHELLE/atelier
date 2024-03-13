import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristiqueComponent } from '../../../gestion-caracteristiques/add-caracteristique/caracteristique.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-caracteristiques-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, CaracteristiqueComponent],
  templateUrl: './caracteristiques-step.component.html',
  styleUrls: ['./caracteristiques-step.component.scss']
})
export class CaracteristiquesStepComponent {
  selectedValuesFrom: any[] = []
  @Input() selectedCharacteristics: any[] = []
  @Input() groupe: any[] = []
  @Input() readonly: any
  @Input() useFlex: any
  @Input() groupFlex: any
  form!: FormGroup
  @Output() nextStep = new EventEmitter<any>();
  @Output() prevStep = new EventEmitter<any>();
  submitted: boolean = false;
  constructor(private fb: FormBuilder) { }
  @Input() data: any
  ngOnInit() {
    this.form = this.fb.group({
      caracteristiques: [[], []]
    });
    console.log('////////////////', this.data);
    if (this.data.length) {
      // Map to store unique groups
      const groupMap = new Map<string, any>();
      // Map to store unique characteristics
      const characteristicMap = new Map<string, any>();
      for (let d of this.data) {
        // if (!groupMap.has(d.groupe._id)) {
        //   // Add the groupe to the map and push it into the array
        //   groupMap.set(d.groupe._id, d.groupe);
        //   this.groupe.push(d.groupe);
        //   this.groupe.sort((a, b) => new Date(a.CreatedAt).getTime() - new Date(b.CreatedAt).getTime());
        //   console.log("group arrrrrrrrrrrrrrrrrrrrrrrrrrray ", this.groupe);
        // }
        // // Check if the characteristic ID is not already in the map
        // if (!characteristicMap.has(d.characteristic._id)) {
        //   // Add the characteristic to the map and push it into the array
        //   characteristicMap.set(d.characteristic._id, d.characteristic);
        //   this.selectedCharacteristics.push(d.characteristic);
        // }
        this.selectedValuesFrom.push({
          value: d.value,
          characteristic: d.characteristic,
          groupe: d.groupe,
        });
      }
    }
  }
  nextPage() {
    if (this.form.valid) {
      this.nextStep.emit(this.form.value); // Emit event to notify parent component
      console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid", this.form.value);
    } else {
      console.log("error", this.form, Error);
    }
    this.submitted = true;
  }
  prevPage() {
    if (this.form.valid) {
      this.prevStep.emit(this.form.value); // Emit event to notify parent component
      console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid baaack", this.form.value);
    }
    this.submitted = true;
  }
  handleSelectedData(data: any[]) {
    // Handle the emitted data here, you can update your FormArray accordingly
    let selectedCharacteristicsArray = this.form.get("caracteristiques")?.value;
    selectedCharacteristicsArray = []; // Clear previous values
    for (let d of data) selectedCharacteristicsArray.push(d);

    console.log(
      "selectedCharacteristicsArray-=-=-=-=-=-=-=-=-=",
      selectedCharacteristicsArray
    );
    this.form.get("caracteristiques")?.setValue(selectedCharacteristicsArray);
    console.log(
      "this.form.get(caracteristiques)?.setValue(selectedCharacteristicsArray)",
      this.form.get("caracteristiques")?.value
    );
  }
}
