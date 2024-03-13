import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommentService } from 'src/app/shared/services/comment.service';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-reviews-form',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TranslateModule,
    RatingModule,
  ],
  templateUrl: './reviews-form.component.html',
  styleUrls: ['./reviews-form.component.scss'],
})
export class ReviewsFormComponent {
  contactForm: FormGroup;

  replyvisible: boolean = false;
  editvisible: boolean = false;
  editReplyvisible: boolean = false;
  editedCommentId: number | null = null;
  editIndex!: string;
  comments: Comment[] = [];
  selectedComment: Comment | null = null;
  selectedReply: any | null;
  id!: string | null;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private config: DynamicDialogConfig,
    private refconfig: DynamicDialogRef
  ) {
    this.contactForm = this.fb.group({
      parentComment: [null, []],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      Notation: [ 0 , []],
      replies: [[], []],
    });

    if (
      this.config?.data &&
      (Object.keys(this.config.data) || {}).includes('CommentID')
    ) {
      if (this.config.data.CommentID) {
        this.id = this.config.data.CommentID;
      }
      if (this.config.data.comment) {
        this.contactForm.patchValue(this.config.data.comment);
      }
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      if (this.id) {
        //edit reply
        this.refconfig.close({
          comment: this.contactForm.value,
        });
      } else {
        //add new reply
        if (this.contactForm.value.parentComment)
          this.refconfig.close({
            comment: { ...this.contactForm.value, id: Date.now().toString() },
          });
        else {
          //add comment
          this.onAdd.emit({
            ...this.contactForm.value,
            id: Date.now().toString(),
          });
        }
      }
    }
    console.log('this.contactForm' ,this.contactForm.value);
    
    this.contactForm.reset();
  }
}
