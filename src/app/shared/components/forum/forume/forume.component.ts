import {ChangeDetectionStrategy,ChangeDetectorRef,Component,NgZone,} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule,FormGroup,FormBuilder, Validators,} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NavbarComponent } from '../../navbar-journal/navbar.component';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { CommentService } from 'src/app/shared/services/comment.service';
import { Comment } from '../../../models/comment.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommentsFormComponent } from '../comments-form/comments-form.component';
import {DynamicDialogConfig, DynamicDialogRef, DialogService} from 'primeng/dynamicdialog';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'app-forume',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    NavbarComponent,
    InputTextareaModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TranslateModule,
    CommentsFormComponent,
  ],
  templateUrl: './forume.component.html',
  styleUrls: ['./forume.component.scss'],
  providers: [DialogService],

  changeDetection: ChangeDetectionStrategy.Default,
})
export class ForumeComponent {
  comments: Comment[] = [];
  ref!: DynamicDialogRef;
  ngOnInit() {
    // Fetch or initialize your comments
    this.comments = this.commentService.getComment();
  }

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private zone: NgZone,
    private commentService: CommentService,
    private config: DynamicDialogConfig,
    private dialogService: DialogService,
    private helpers: HelpersService
  ) {}
  OnAddComment(event: any) {
    console.log(event);
    this.comments.push(event);
  }

  addReply(CommentId: string) {
    this.ref = this.dialogService.open(CommentsFormComponent, {
      header: 'add comment',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        CommentID: null,
        comment: {
          parentComment: CommentId,
        },
      },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(this.comments )
        console.log( CommentId)

                for (let a of this.comments) {
          if (a.id == CommentId) {
            console.log('====',a.id);
            console.log('+++++',data.comment)
            console.log('------------',a.replies)
            a?.replies.push(data.comment);
          }
        }
        
      }
    });
  }
  editComment(CommentId: string) {
    let dataComment = this.helpers.flatDeep(this.comments, 'replies');
    this.ref = this.dialogService.open(CommentsFormComponent, {
      header: 'add comment',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        CommentID: CommentId,
        comment: dataComment.find((c: Comment) => c.id == CommentId),
      },
    });
    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        console.log(data.comment);

        for (let a of dataComment) {
          console.log(CommentId, '===>', a);

          if (a.id == CommentId) {
            a.message = data.comment.message;
            return;
          }
        }
      }
    });
  }
  deleteComment(CommentId: string) {
    const removeComment = (data: any[]) => {
      for (let [i, d] of data.entries()) {
        if (d.id == CommentId) {
          data.splice(i, 1);
          return;
        } else if (d.replies?.length) {
          removeComment(d.replies);
        }
      }
    };
    removeComment(this.comments);
    console.log(this.comments);
  }
}
