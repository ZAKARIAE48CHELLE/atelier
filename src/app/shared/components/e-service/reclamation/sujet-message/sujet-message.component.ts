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
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { TranslateModule } from "@ngx-translate/core";
import { DropdownModule } from "primeng/dropdown";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { HelpersService } from "src/app/shared/services/helpers.service";
import { domainService } from "src/app/shared/services/domain.service";
import { GroupeCaracteristiqueService } from "src/app/shared/services/groupecaracteristique.service";
import { CaracteristiqueComponent } from "../../../gestion-caracteristiques/add-caracteristique/caracteristique.component";
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};
@Component({
  selector: "app-suget-message",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    TranslateModule,
    MultiSelectModule,
    DropdownModule,
    NgxDropzoneModule,
    DropzoneModule,
    CaracteristiqueComponent
  ],
  templateUrl: "./sujet-message.component.html",
  styleUrls: ["./sujet-message.component.scss"],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    }
  ],
})
export class SujetMessageComponent {
  public PhotoDropZoneConfig: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 10000000000000000,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: 'Supprimer',
    dictCancelUpload: 'Annuler',
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    dictRemoveFileConfirmation: 'Voulez-vous vraiment Supprimer ce fichier?',
    acceptedFiles: 'image/*',
  };
  public DocumentDropZoneConfig: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 10,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    maxFilesize: 10000000000000000,
    addRemoveLinks: true,
    resizeHeight: 300,
    resizeQuality: 2,
    dictFileTooBig: "Image trop grande, Merci d'en choisir une autre",
    dictRemoveFile: 'Supprimer',
    dictCancelUpload: 'Annuler',
    dictCancelUploadConfirmation: "Voulez-vous vraiment annuler l'upload ?",
    dictRemoveFileConfirmation: 'Voulez-vous vraiment Supprimer ce fichier?',
    acceptedFiles: 'application/pdf,.psd',
  };
  @Input() data: any;
  @Input() acticatedIndex: any;
  selectedPhoto: any;

  @Output() nextStep = new EventEmitter<any>();
  form!: FormGroup;
  sujetsModels: any[] = [];
  subjectOptions: any[] = [];
  groupe: any[] = []
  childrenOption: any[] = []
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private helpers: HelpersService, private domainService: domainService, private GroupeCaracteristiqueService: GroupeCaracteristiqueService) { }
  selectedSubject: any;
  selectedDocument: any;
  selectedCharacteristics: any[] = [];
  newlySelectedCharacteristics: any[] = [];

  ngOnInit() {
    this.form = this.fb.group({
      sujet: ["", [Validators.required]],
      sousSujet: [[] || "", []],
      translations: this.fb.group({
        language: ["", []],

        message: ["", [Validators.required]],
      }),
      images: [[], []],
      fichier: ["", []],
      caracteristiques: [[], []]
    });
    console.log("////////", this.data);
    if (this.data) {
      this.form.patchValue(this.data);
      this.subjectOptions = this.data.sujet;
      this.childrenOption = this.data.sousSujet;
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
          console.log('group arrrrrrrrrrrrrrrrrrrrrrrrrrray ', this.groupe);

        }
        // Check if the characteristic ID is not already in the map
        if (!characteristicMap.has(d.characteristic._id)) {
          // Add the characteristic to the map and push it into the array
          characteristicMap.set(d.characteristic._id, d.characteristic);
          this.selectedCharacteristics.push(d.characteristic);
        }
        this.newlySelectedCharacteristics.push({ value: d.value, characteristic: d.characteristic, groupe: d.groupe });

      }
      console.log('this.newlySelectedCharacteristics ============ this.newlySelectedCharacteristics',this.newlySelectedCharacteristics);
      
    }

    this.subjectOptions = this.domainService.getDomains().map((subject) => ({
      label: subject.translations.designation,
      value: subject._id,
    }));
    console.log(
      'this.sujetsModels', this.subjectOptions
    );
  }

  onSubjectChange(event: any) {
    this.groupe = []
    this.selectedCharacteristics = []

    console.log('================================', event.value.value);
    let domainId = event.value.value
    console.log('beeefoore', this.childrenOption);

    this.childrenOption = (this.domainService.getDomains().find(sujet => sujet._id === domainId)?.taxonomies || [])
      .map((subject: any) => ({ label: subject.translations.designation, value: subject._id }));
    console.log('afteeeer', this.childrenOption);

    this.groupe = this.GroupeCaracteristiqueService.getGroupeByDomain(domainId);
    console.log('this.groupe', this.groupe);

  }
  getTaxo(event: any) {
console.log({event});

    const selectedTaxonomyIds = event.value.map((item: any) => item.value); // Assuming value is the taxonomy ID
    
    console.log(selectedTaxonomyIds);

    // Clear the selectedCharacteristics array before processing new selections
    this.selectedCharacteristics = [];

    // Iterate over the groups
    for (const groupe of this.groupe) {
      // Check if the groupe belongs to the selected domain
      if (groupe.domain === this.form.get('sujet')?.value.value) {
        // Iterate over the characteristics of the groupe
        for (const characteristic of groupe.caracteristiques) {
          // Check if the characteristic's taxonomy matches any of the selected taxonomies
          if (selectedTaxonomyIds.includes(characteristic.taxonomie)) {
            this.selectedCharacteristics.push(characteristic);
          }
        }
        console.log('Selected characteristics:', this.selectedCharacteristics);
        // You can return selectedCharacteristics or do any other processing with them
      }
    }
  }





  toggleCustomProblemInput() {
    this.form.get("translations.sousSujet")?.setValue("");
  }
  nextPage() {
    if (this.form.valid) {
      this.nextStep.emit(this.form.value); // Emit event to notify parent component
      console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid", this.form.value);
      this.helpers.convert(this.form.value, [
        { file: this.selectedPhoto, title: 'photo' },
        { file: this.selectedDocument, title: 'Docu' },
      ]);
    } else {
      console.log("error", this.form, Error);
      this.form.markAllAsTouched()
    }
    this.submitted = true;
  }



  onUploadPhotoError(event: any) {
    console.log('uploadError', Error.name);
  }
  onUploadPhotoSuccess(event: any) {
    this.selectedPhoto = event[0];
  }
  onDeletePhotoSuccess(event: any) {
    this.selectedPhoto = null;
  }
  onUploadDocumentError(event: any) {
    console.log('uploadError', Error.name);
  }
  onUploadDocumentSuccess(event: any) {
    this.selectedDocument = event[0];
  }
  onDeleteDocumentSuccess(event: any) {
    this.selectedDocument = null;
  }

  // Function to handle selected data from the component


  handleSelectedData(data: any[]) {
    // Handle the emitted data here, you can update your FormArray accordingly
    let selectedCharacteristicsArray = this.form.get('caracteristiques')?.value;
    selectedCharacteristicsArray = [] // Clear previous values
    for (let d of data)
      selectedCharacteristicsArray.push(d);

    console.log('selectedCharacteristicsArray-=-=-=-=-=-=-=-=-=', selectedCharacteristicsArray);
    this.form.get('caracteristiques')?.setValue(selectedCharacteristicsArray);
    console.log('this.form.get(caracteristiques)?.setValue(selectedCharacteristicsArray)', this.form.get('caracteristiques')?.value);

  }













}
