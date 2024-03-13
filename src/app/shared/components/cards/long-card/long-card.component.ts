import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../../models/postCard.model';
import { PostService } from '../../../services/postcard.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-long-card',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.scss']
})
export class LongCardComponent {

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
