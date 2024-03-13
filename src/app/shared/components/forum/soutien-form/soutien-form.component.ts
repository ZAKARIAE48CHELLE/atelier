import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CommentService } from 'src/app/shared/services/comment.service';
import { Comment } from '../../../../shared/models/comment.model';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ActionCitoyenneService } from 'src/app/shared/services/ActionCitoyenne.service';
import { Contribution } from 'src/app/shared/models/contributions.model';
import { DropdownModule } from 'primeng/dropdown';
import { CountryService } from 'src/app/shared/services/country.service';
@Component({
  selector: 'app-soutien-form',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TranslateModule,
  ],
  templateUrl: './soutien-form.component.html',
  styleUrls: ['./soutien-form.component.scss'],
})
export class SoutienFormComponent {
  SoutienForm: FormGroup;
  selectedCountry:any;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Input() typeMessage : any;
  id: any;
  countries: any;
  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private config: DynamicDialogConfig,
    private refconfig: DynamicDialogRef,
    private CountriesService : CountryService,
    private ref : DynamicDialogRef,

  ) {
    this.SoutienForm = this.fb.group({
      refMembre: [''],
      translations: this.fb.group({
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        fonction: ['', [Validators.required]],
      }),
      email: ['', [Validators.required, Validators.email]],
      message: ['',[]],
      pays: ['', Validators.required],
    });

    if (
      this.config?.data &&
      (Object.keys(this.config.data) || {}).includes('CommentID')
    ) {
      if (this.config.data.CommentID) {
        this.id = this.config.data.CommentID;
      }
      if (this.config.data.comment) {
        this.SoutienForm.patchValue(this.config.data.comment);
      }
    }

    this.countries = this.CountriesService.getCountry();
  }

  onSubmit() {
    if (this.SoutienForm.valid) {
      if (this.id) {
        //edit reply
        this.refconfig.close({
          comment: this.SoutienForm.value,
        });
      } else {
        //add new reply
        if (this.SoutienForm.value.parentComment)
          this.refconfig.close({
            comment: { ...this.SoutienForm.value, id: Date.now().toString() },
          });
        else {
          //add comment
          this.onAdd.emit({
            ...this.SoutienForm.value,
            id: Date.now().toString(),
          });
        }
      }
    }
    if(this.SoutienForm.valid){
      
      this.ref.close({
        soutien : this.SoutienForm.value
      })
    }

    this.SoutienForm.reset();
  }


  addPerson(){
    // console.log('yyyyyyyy',this.personeForm);
    
    // console.log('===',this.personeForm.valid);
   
  }
}
