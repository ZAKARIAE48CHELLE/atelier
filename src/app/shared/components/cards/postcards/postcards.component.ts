import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../services/postcard.service';
import { PostCard } from '../../../models/postCard.model';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-postcards',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.scss']
})
export class PostcardsComponent {
  @Input() max :any;
  posts : PostCard[] = []

constructor( private postservice : PostService ){}

ngOnInit() {
this.posts = this.postservice.getPost()
}
  formatPostDate(post: PostCard): string {
    // Format date as a string without time
    return post.date.toLocaleDateString();
  }
}
