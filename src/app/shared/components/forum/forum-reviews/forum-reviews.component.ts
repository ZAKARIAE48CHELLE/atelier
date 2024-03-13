import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { CommentService } from 'src/app/shared/services/comment.service';
import { HelpersService } from 'src/app/shared/services/helpers.service';
import { CommentsFormComponent } from '../comments-form/comments-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NavbarComponent } from '../../navbar-journal/navbar.component';
import { Comment } from 'src/app/shared/models/comment.model';
import { ReviewsFormComponent } from '../reviews-form/reviews-form.component';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-forum-reviews',
  standalone: true,
  templateUrl: './forum-reviews.component.html',
  styleUrls: ['./forum-reviews.component.scss'],
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
    ReviewsFormComponent,
    RatingModule,
  ],
})
export class ForumReviewsComponent {
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
    this.comments.unshift(event);
  }

  addReply(CommentId: string) {
    this.ref = this.dialogService.open(ReviewsFormComponent, {
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
        for (let a of this.comments) {
          if (a.id == CommentId) {
            a.replies.push(data.comment);
          }
        }
      }
    });
  }
  editComment(CommentId: string) {
    let dataComment = this.helpers.flatDeep(this.comments, 'replies');
    this.ref = this.dialogService.open(ReviewsFormComponent, {
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
            a.Notation = data.comment.Notation;
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



  isCollapsed: boolean = true; // Flag to track the collapse state



  // Method to toggle collapse state
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
