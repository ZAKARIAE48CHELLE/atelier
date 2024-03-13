import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CaracteristiqueComponent } from "../../../gestion-caracteristiques/add-caracteristique/caracteristique.component";
import { DetailsCaracteristiquesComponent } from "../../../gestion-caracteristiques/details-caracteristiques/details-caracteristiques.component";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    CaracteristiqueComponent,
    ReactiveFormsModule,
    FormsModule,
    DetailsCaracteristiquesComponent

  ],
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent {
  @Input() Choices: any;
  groupe: any[] = [];
  @Output() prevStep = new EventEmitter<any>();
  submitted: boolean = false;
  document: any[] = [];
  personel: any;
  choice: any;
  characteristique: any[] = [];
  form!: FormGroup;
  newDataArray: any[] = [];
  caracteristique: any[] = []
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      personnel: [this.personel, [Validators.required]],
      choice: [this.Choices, [Validators.required]],
      caracteristiques: [, [Validators.required]],
    });
  }
  selectedCharacteristics: any[] = [];
  newlySelectedCharacteristics: any[] = [];
  ngOnInit() {
    console.log("-------------", this.Choices);
    this.personel = this.Choices.get("personnel")?.value;
    this.choice = this.Choices.get("choice")?.value;
    this.caracteristique = this.Choices.get('caracteristiques')?.value.filter((c: any) => c.value);
    this.document = this.Choices.get("document")?.value;
    console.log("=================?????", this.document);
    // Create a new array to store data similar to newlySelectedCharacteristics
    if (this.caracteristique.length) {
      for (let cara of this.caracteristique) {
        let val = cara.value || cara;
        this.characteristique.push(val);
      }
    }
    const groupMap = new Map<string, any>();
    // Map to store unique characteristics
    const characteristicMap = new Map<string, any>();
    for (let d of this.caracteristique) {
      if (!groupMap.has(d.groupe._id)) {
        // Add the groupe to the map and push it into the array
        groupMap.set(d.groupe._id, d.groupe);
        this.groupe.push(d.groupe);
        this.groupe.sort((a, b) => new Date(a.CreatedAt).getTime() - new Date(b.CreatedAt).getTime());
        console.log("group arrrrrrrrrrrrrrrrrrrrrrrrrrray ", this.groupe);
      }
      // Check if the characteristic ID is not already in the map
      if (!characteristicMap.has(d.characteristic._id)) {
        // Add the characteristic to the map and push it into the array
        characteristicMap.set(d.characteristic._id, d.characteristic);
        this.selectedCharacteristics.push(d.characteristic);
      }
      this.newlySelectedCharacteristics.push({
        value: d.value,
        characteristic: d.characteristic,
        groupe: d.groupe,
      });
    }
    // Patch form values if needed
    this.form.patchValue({
      personnel: this.personel,
      choice: this.choice, // Assuming this is correct, otherwise adjust accordingly
      caracteristiques: this.characteristique,
    });
  }
  submit() {
    console.log("================================================================", this.form);
  }

  prevPage() {
    this.prevStep.emit(this.form.value); // Emit event to notify parent component
    console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid baaack", this.form.value);
    this.submitted = true;
  }
  handleSelectedData(data: any[]) {
    // Handle the emitted data here, you can update your FormArray accordingly
    let selectedCharacteristicsArray = this.form.get("caracteristiques")?.value;
    selectedCharacteristicsArray = []; // Clear previous values
    for (let d of data) selectedCharacteristicsArray.push(d);
    console.log("selectedCharacteristicsArray-=-=-=-=-=-=-=-=-=", selectedCharacteristicsArray);
    this.form.get("choice")?.get("caracteristiques")?.setValue(selectedCharacteristicsArray);
    console.log("this.form.get(caracteristiques)?.setValue(selectedCharacteristicsArray)", this.form.get("caracteristiques")?.value);
  }
}
