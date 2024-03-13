import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TranslateModule } from '@ngx-translate/core';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};
@Component({
  selector: 'app-temoignage-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    NgxDropzoneModule,
    InputTextareaModule,
    InputTextModule,
    DropzoneModule,
    DialogModule,
    CalendarModule,
    ButtonModule,
    FileUploadModule,
    TranslateModule
  ],
  templateUrl: './temoignage-form.component.html',
  styleUrls: ['./temoignage-form.component.scss'],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})


export class TemoignageFormComponent {
  public photoDropZoneConfig: DropzoneConfigInterface = {
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
  TemoignageForm: FormGroup;
  visible: boolean = false;
  selectedPhoto: any = null;
  selectedLogo: any = null;
  constructor(private fb: FormBuilder, private helpers: HelpersService) {
    this.TemoignageForm = this.fb.group({
      classTemoignage: [null, []],
      translations: this.fb.group({
        language: [null, []],
        nom: [null, [Validators.required]],
        prenom: [null, [Validators.required]],
        temoignage: [null, [Validators.required]],
        entreprise: [null, []],
      }),
      fonction: [null, [Validators.required]],
      email: [null, [Validators.email]],
      date: [, [Validators.required]],
      photo: [null, []],
      logo: [null, []],
      lienAssocie: [null, []],
    });
  }
  onSubmit() {
    this.helpers.convert(this.TemoignageForm.value, [
      { file: this.selectedPhoto, title: 'photo' },
      { file: this.selectedLogo, title: 'Logo' },
    ]);
    console.log('===========>', this.TemoignageForm.value);
    this.TemoignageForm.reset()
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
  onUploadLogoError(event: any) {
    console.log('uploadError', Error.name);
  }
  onUploadLogoSuccess(event: any) {
    this.selectedPhoto = event[0];
  }
  onDeleteLogoSuccess(event: any) {
    this.selectedPhoto = null;
  }
}
