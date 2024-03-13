import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { Temoignage } from 'src/app/shared/models/temoignae.model';
import { TemoignageService } from 'src/app/shared/services/temoignage.service';
import { DialogModule } from 'primeng/dialog';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarModule } from 'angular-calendar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from 'src/app/shared/components/navbar-journal/navbar.component';
import { TemoignageFormComponent } from 'src/app/shared/components/forum/temoignage-form/temoignage-form.component';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { AdsCardComponent } from 'src/app/shared/components/cards/ads-card/ads-card.component';

@Component({
  selector: 'app-temoignage',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    NgxDropzoneModule,
    InputTextareaModule,
    InputTextModule,
    DropzoneModule,
    NavbarComponent,
    DialogModule,
    CalendarModule,
    ButtonModule,
    FileUploadModule,
    TranslateModule,
    AdsCardComponent
  ],
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.scss'],
  providers: [DialogService],
})
export class TemoignageComponent {
  @Input() actrTemoignage : any[] =[]
  TemoignageForm: FormGroup;
  soutiens: Temoignage[] = [];
  visible: boolean = false;

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(TemoignageFormComponent, {
      header: 'Select a Product',
      width: '80%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
  }

  ngOnInit() {
    if(this.actrTemoignage.length > 0){
      this.soutiens = this.actrTemoignage;
    }else{
      this.soutiens = this.temoignageService.getTemoignage();
    }
  }
  constructor(
    private fb: FormBuilder,
    private temoignageService: TemoignageService,
    private helpers: HelpersService,
    public dialogService: DialogService
  ) {
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
}
