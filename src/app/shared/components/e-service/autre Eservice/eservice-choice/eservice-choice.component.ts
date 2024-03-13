import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { GroupeCaracteristiqueService } from "src/app/shared/services/groupecaracteristique.service";
import { domainService } from "src/app/shared/services/domain.service";
import { TranslateModule } from "@ngx-translate/core";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MultiSelectModule } from "primeng/multiselect";
import { CaracteristiqueComponent } from "../../../gestion-caracteristiques/add-caracteristique/caracteristique.component";
import { DropdownModule } from "primeng/dropdown";
import { SliderCarateristiqueComponent } from "../../../slider-carateristique/slider-carateristique.component";
import {
  DROPZONE_CONFIG,
  DropzoneConfigInterface,
  DropzoneModule,
} from "ngx-dropzone-wrapper";
import { NgxDropzoneModule } from "ngx-dropzone";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { AddRefLienComponent } from "../../../add-ref-lien/add-ref-lien.component";
import { validateEvents } from "angular-calendar/modules/common/util/util";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
};
@Component({
  selector: "app-eservice-choice",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslateModule,
    MultiSelectModule,
    CaracteristiqueComponent,
    DropdownModule,
    SliderCarateristiqueComponent,
    NgxDropzoneModule,
    DropzoneModule,
  ],
  templateUrl: "./eservice-choice.component.html",
  styleUrls: ["./eservice-choice.component.scss"],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})
export class EserviceChoiceComponent {
  public PhotoDropZoneConfig: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 10000000000000000,
    addRemoveLinks: true,
    resizeHeight: 200,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: "Supprimer",
    dictCancelUpload: "Annuler",
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    dictRemoveFileConfirmation: "Voulez-vous vraiment Supprimer ce fichier?",
    acceptedFiles: " image/*,application/pdf,.psd",
  };
  groupe: any[] = [];
  selectedCharacteristics: any[] = [];
  newlySelectedCharacteristics: any[] = [];
  ref!: DynamicDialogRef;

  form!: FormGroup;
  submitted: boolean = false;
  selectedDomain: any;
  @Output() nextStep = new EventEmitter<any>();
  @Input() acticatedIndex: any;
  @Input() data: any;
  @Input() acteur: any;
  @Output() prevStep = new EventEmitter<any>();

  eservice: any[] = [];
  taxonomie: any[] = [];
  eserviceObjects: any[] = [];
  // @Input()  : any
  categorieDeDuffision: any[] = [];
  selectedTaxo: any;
  ModulesChoices: any[] = [];
  childrenOption: any[] = [];
  constructor(
    private fb: FormBuilder,
    private domainService: domainService,
    private GroupeCaracteristiqueService: GroupeCaracteristiqueService
  ) {}

  ngOnInit() {
    this.eservice = this.acteur.eService;
    console.log("this.eservice ::: ", this.eservice);

    //@ts-ignore
    this.eserviceObjects = this.eservice.map((e) => ({
      label: e.translations.designationEService,
      value: e,
    }));

    console.log("::::::", this.eserviceObjects);

    this.form = this.fb.group({
      translations: this.fb.group({
        language: [null, []],
      }),
      module: [null, [Validators.required]],
      categorieDeDuffision: [null, [Validators.required]],
      caracteristiques: [[], []],
      groupe : [this.groupe,[]]
    });

    console.log("////////", this.data);

    if (this.data) {
      console.log("******", this.data);
      this.form.patchValue({
        translations: this.data.translations,
        module: this.data.module,
        categorieDeDuffision: this.data.categorieDeDuffision,
        caracteristiques: this.data.caracteristiques,
      });
      console.log("this.childrenOption :::: ", this.childrenOption);
      this.selectedTaxo = this.data.module.value;
      // Map to store unique groups
      const groupMap = new Map<string, any>();
      // Map to store unique characteristics
      const characteristicMap = new Map<string, any>();
      for (let d of this.data.caracteristiques) {
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
    }
    this.categorieDeDuffision = [
      {
        label: "Spécifique à un acteur économique",
        value: "8487diferiureiu",
      },
      {
        label: "Restreinte à un groupe d'acteurs",
        value: "8487diferiuredddddiu",
      },
      {
        label: "Entièrement Publique",
        value: "8487diferiursdfsdfsedddddiu",
        code: "code_537",
      },
      {
        label: "Semi-Publique (devient publique après un premier choix)",
        value: "8487diferiursdfsdfsdafafafdfdfsedddddiu",
      },
    ];
  }

  onSubjectChange(event: any) {
    this.groupe = [];
    this.selectedCharacteristics = [];

    let caracteristiques = event.value.value.caracteristique;
    console.log("================================", caracteristiques);
    this.selectedTaxo = event.value.value;
    console.log("this.selectedTaxo :::: ", this.selectedTaxo);

    this.selectedCharacteristics = caracteristiques;
    let groups = this.GroupeCaracteristiqueService.getGroupe();

    // Create a Set to store unique group IDs
    let uniqueGroupIds = new Set<string>();

    caracteristiques.forEach((c: any) => {
      for (let group of groups) {
        if (group._id === c.groupe) {
          uniqueGroupIds.add(group._id); // Add group ID to Set
        }
      }
    });

    // Convert Set back to array
    this.groupe = Array.from(uniqueGroupIds).map((groupId) => {
      // Find corresponding group object using group ID
      return groups.find((group) => group._id === groupId);
    });
    this.form.get('groupe')?.setValue(this.groupe);
    console.log("::::::::::::::", this.groupe);
  }

  getTaxo(event: any) {
    const selectedTaxonomyIds = event.value; // Assuming value is the taxonomy ID
    console.log(selectedTaxonomyIds);

    // Clear the selectedCharacteristics array before processing new selections
    this.selectedCharacteristics = [];
    console.log(
      "this.form.get(eserviceChoice)?.value",
      this.form.get("eserviceChoice")?.value
    );
    console.log("this.form.get(module)?.value", this.form.get("module")?.value);
    console.log("this.selectedDomain ::::: ", this.selectedDomain);

    // Iterate over the groups
    for (const groupe of this.groupe) {
      // Check if the groupe belongs to the selected domain

      if (groupe.domain === this.selectedDomain._id) {
        // Iterate over the characteristics of the groupe
        for (const characteristic of groupe.caracteristiques) {
          // Check if the characteristic's taxonomy matches any of the selected taxonomies
          if (selectedTaxonomyIds.value == characteristic.taxonomie) {
            this.selectedCharacteristics.push(characteristic);
          }
        }
        console.log("Selected characteristics:", this.selectedCharacteristics);
        // You can return selectedCharacteristics or do any other processing with them
      }
    }
  }
  @Output() groupSelected = new EventEmitter<any>();
  @Output() characteristicsSelected = new EventEmitter<any>();
  @Output() newlySelectedCharacteristic = new EventEmitter<any>();

  emitGroupSelected(group: any) {
    this.groupSelected.emit(group);
  }

  // Function to emit selected characteristics
  emitCharacteristicsSelected(characteristics: any[]) {
    this.characteristicsSelected.emit(characteristics);
  }
  newlySelectedCharacteristicSubmit(characteristics: any[]) {
    this.newlySelectedCharacteristic.emit(characteristics);
  }
  nextPage() {
    if (this.form.valid) {
      this.nextStep.emit(this.form.value); // Emit event to notify parent component
      console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid", this.form.value);
      this.newlySelectedCharacteristicSubmit(this.newlySelectedCharacteristics)
      this.emitCharacteristicsSelected(this.selectedCharacteristics)
      this.emitGroupSelected(this.groupe)
  
    } else {
      console.log("error", this.form, Error);
    }
    this.submitted = true;
  }
  prevPage() {
    if (this.form.valid) {
      this.prevStep.emit(this.form.value); // Emit event to notify parent component
      console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid baaack", this.form.value);
    } else {
    this.form.markAllAsTouched()
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
