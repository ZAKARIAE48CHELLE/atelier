import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DROPZONE_CONFIG, DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InputNumberModule } from 'primeng/inputnumber';
import { HelpersService } from 'src/app/shared/services/helpers.service';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};
@Component({
  selector: 'app-add-ref-lien',
  standalone: true,
  imports: [CommonModule,
    InputNumberModule,
    ReactiveFormsModule,
    InputTextModule,
    TranslateModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    NgxDropzoneModule,
    DropzoneModule,
  ],
  templateUrl: './add-ref-lien.component.html',
  styleUrls: ['./add-ref-lien.component.scss'],
  providers: [
    {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG,
    }
],
})


export class AddRefLienComponent {
  public DocumentDropZoneConfig: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
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

  public PhotoDropZoneConfig: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
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


  form!:FormGroup
  type!: string
  categorieOptions : any[]=[]
  typeOptions : any[]=[]
  typeSelected !: string;
  categorieSelected !: string;
  classOptions : any[] = [];
  classSelected !: string
  selectedDocument: any = null;
  selectedPhoto : any = null;
  formatOptions : any[] = []
  uniteOptions : any[] = []

    constructor(private fb : FormBuilder ,
       private config : DynamicDialogConfig,
       private ref : DynamicDialogRef,
       private helpers : HelpersService
       ){
        this.type = this.config?.data.type ;
        if(this.type == 'contenu' ){
          this.form= this.fb.group({
            id: [Date.now().toString(), []],
            class: [null, [Validators.required]],
            Categorie: [null, [Validators.required]],
            type: [null, [Validators.required]],
            translations: this.fb.group({
              language: [null, []],
              titre: [null, [Validators.required]],
              Commentairerelatif: [null, [Validators.required]],
            }),
            lienAccess: [null, [Validators.required]],
            fichier : [null , []],
            format : [null , []],
            provenance : [null , []],
            phseConcerne : [null ,[]],
            taille :[null ,[]],
            unite :[null , []],
            nbrPage : [null ,[]],
            dureeLectureEnMin : [null , []],
            imageAssociee : [null , []],
            etats: ["creation" , []], 
          })
      }else{
        this.form= this.fb.group({
          id: [Date.now().toString(), []],
      class: [null, [Validators.required]],
      Categorie: [null, [Validators.required]],
      type: [null, [Validators.required]],
      translations: this.fb.group({
        language: [null, []],
        titre: [null, [Validators.required]],
        Commentairerelatif: [null, [Validators.required]],
      }),
      lienAccess: [null, []],
      fichier : [null , []],
      format : [null , []],
      provenance : [null , []],
      phseConcerne : [null ,[]],
      taille :[null ,[]],
      unite :[null , []],
      nbrPage : [null ,[]],
      dureeLectureEnMin : [null , []],
      imageAssociee : [null , []],
      etats: ["creation" , []],
     

        })
      }
      if(this.type == 'Document'){
        this.form.get('lienAccess')?.clearValidators()
        this.form.get('lienAccess')?.updateValueAndValidity()
        this.form.get('translations.Commentairerelatif')?.clearValidators()
        this.form.get('translations.Commentairerelatif')?.updateValueAndValidity()

      }

      if(this.config?.data?.Lien){
        this.form.patchValue(this.config?.data.Lien)
        console.log('//////****************** this.config?.data.type',this.config?.data.type);
        
      }
    }

      ngOnInit(){
        this.typeOptions = [
        {
          value : '1',
          label : 'Article Scientifique'
        },
        {
          value : '2',
          label : 'Article de Presse'
        },
        {
          value : '3',
          label : 'Livre'
        },
        {
          value : '4',
          label : 'Film Documentaire'
        },
        {
          value : '5',
          label : 'Débat télévisé ou en ligne'
        },
        {
          value : '6',
          label : 'Blog'
        },
        {
          value : '7',
          label : 'Autre'
        },
      ]
    this.categorieOptions = [
      {
        value : '1',
        label : 'Source d\'Inspiration'
      },
      {
        value : '2',
        label : 'Exemple à suivre'
      },
      {
        value : '3',
        label : 'Etudes et Enquêtes'
      },
      {
        value : '4',
        label : 'Travaux Scientifiques'
      },
      {
        value : '5',
        label : 'Complément d\'Information'
      },
      {
        value : '6',
        label : 'Politique et Stratégie'
      },
      {
        value : '7',
        label : 'Loi ou Projet de Loi'
      },
    ]
    this.classOptions =[{
      value : '1',
      label : 'Liens'
    },
    {
      value : '2',
      label : 'Référence'
    }
  ]
  this.formatOptions = [
    {
      label : 'text',
      value : '1'
    },
    {
      label : 'tableur',
      value : '1'
    },
    {
      label : 'image',
      value : '1'
    },
    {
      label : 'video',
      value : '1'
    },
  ]
  this.uniteOptions =[
    {
      label : 'KB',
      value : '1'
    },
    {
      label : 'octet',
      value : '1'
    },
    {
      label : 'MB',
      value : '1'
    },
    {
      label : 'GB',
      value : '1'
    },
    {
      label : 'TB',
      value : '1'
    }
    
  ]

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

    LienOrContenu(){
      console.log(this.form);
      this.helpers.convert(this.form.value, [
        { file: this.selectedDocument, title: 'photo' },
      ]);
      this.helpers.convert(this.form.value, [
        { file: this.selectedDocument, title: 'photo' },
      ]);
      console.log('===',this.form);
      if(this.form.valid){
        
        this.ref.close({
          Lien : this.form.value
        })
      }else{
        this.form.markAllAsTouched()
      }
    }
}
