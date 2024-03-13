import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRefLienComponent } from '../../../add-ref-lien/add-ref-lien.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SubmitSuccesComponent } from '../../../submit-succes/submit-succes.component';

@Component({
  selector: 'app-document-step',
  standalone: true,
  imports: [CommonModule, ButtonModule, TableModule, TranslateModule, SubmitSuccesComponent],
  templateUrl: './document-step.component.html',
  styleUrls: ['./document-step.component.scss']
})
export class DocumentStepComponent {
  @Input() data: any;
  @Input() acticatedIndex: any;
  @Output() nextStep = new EventEmitter<any>();

  ref!: DynamicDialogRef;
  form !: FormGroup
  submitted: boolean = false;
  @Output() prevStep = new EventEmitter<any>();

  constructor(
    private dialogService: DialogService,
    private fb: FormBuilder,
    private translate: TranslateService,

  ) {

  }

  ngOnInit() {
    this.form = this.fb.group({
      referenceForm: this.fb.array([]),
    });


    if (this.data.length) {

console.log('/////', this.data);



      const referenceFormArray = this.form.get('referenceForm') as FormArray;
      // Clear existing form array
      referenceFormArray.clear();
      // Patch each item in the referenceForm array
      if (this.data && this.data.length > 0) {
        this.data.forEach((referenceItem: any) => {
          referenceFormArray.push(this.fb.control(referenceItem));
        });
      }
      console.log('====',this.form.get('referenceForm') );
      
   //  this.addreferenceForm(this.data)
    }
  }




  get referenceForm(): any {
    return this.form.get('referenceForm') as FormArray;
  }

  addreferenceForm(Lien: any) {
    console.log(this.referenceForm.length);
    this.referenceForm.push(this.fb.group({
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
      fichier: [null, []],
      format: [null, []],
      provenance: [null, []],
      phseConcerne: [null, []],
      taille: [null, []],
      unite: [null, []],
      nbrPage: [null, []],
      dureeLectureEnMin: [null, []],
      imageAssociee: [null, []],
      etats: ["creation", []],
    }))
    this.referenceForm.controls[this.referenceForm.value.length - 1].patchValue(Lien)
  }
  showDialogLienOrContenu(type: string, item?: any) {
    let titre: any
    console.log(type);
    switch (type) {
      case 'Document': titre = 'Document';
        break;
      case 'reference': titre = 'reference';
        break;
    }
    let translatedTitle = this.translate.instant(titre);



    this.ref = this.dialogService.open(AddRefLienComponent, {
      header: translatedTitle,
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        type: type,
        item: item
      },
    });
    this.ref.onClose.subscribe((data: any) => {
      console.log('++++++', data, '-----', item);
      if (data) {
        this.addreferenceForm(data.Lien)
      }


    });
  }


  ediLien(Lien: any, type: string) {


    this.ref = this.dialogService.open(AddRefLienComponent, {
      header: 'editer votre document',
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        Lien: Lien,
        type: type
      },
    });
    this.ref.onClose.subscribe((data: any) => {
      if(this.data.length){
        console.log('cloooose reeeeeeeeeeeeef', data);
        console.log('this.referenceForm.controls ----' ,this.referenceForm.controls);
        console.log('ana hna');
        let index = this.data.findIndex((a: any) => {
          console.log('a.get(id)?.value',a);    
          console.log('data.Lien.id',data.Lien.id);
          
          return (a.id === data.Lien.id) 
        })
        console.log('indeeeex', index);
        this.referenceForm.controls[index].patchValue(data.Lien)
      }else if(data) {
        console.log('cloooose reeeeeeeeeeeeef', data);
        console.log('this.referenceForm.controls ----' ,this.referenceForm.length);
        
        let index = this.referenceForm.controls.findIndex((a: any) => {
          console.log('a.get(id)?.value',a.get('id')?.value);
          console.log('data.Lien.id',data.Lien.id);
           return  (a.get('id')?.value === data.Lien.id) 
        }) 
        console.log('indeeeex', index);
        this.referenceForm.controls[index].patchValue(data.Lien)
        this.form.updateValueAndValidity()
        console.log({form : this.form , ref : this.referenceForm});
        
      }
    });
  }
  deleteRefCont(Index: number, type: string) {
    this.referenceForm.removeAt(Index)
  }



  nextPage() {
    this.nextStep.emit(this.form.value); // Emit event to notify parent component
    console.log("vaaaaaaaaaaaaaaaaaaaliiiiiiiid", this.form.value);
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

}





