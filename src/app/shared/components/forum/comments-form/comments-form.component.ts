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
import { Contribution } from 'src/app/shared/models/contributions.model';

@Component({
  selector: 'app-comments-form',
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
  ],
  providers: [DialogService],

  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss'],
})
export class CommentsFormComponent {
  contactForm: FormGroup;

  replyvisible: boolean = false;
  editvisible: boolean = false;
  editReplyvisible: boolean = false;
  editedCommentId: number | null = null;
  editIndex!: string;
  comments: Contribution[] = [];
  selectedReply: any | null;
  id!: string | null;
  @Output() onAdd: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private commentService: CommentService,
    private config: DynamicDialogConfig,
    private refconfig: DynamicDialogRef
  ) {
    this.contactForm = this.fb.group({
      parentComment: [null, []],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      replies :[[],[]]
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
    this.contactForm.reset();
  }
}
