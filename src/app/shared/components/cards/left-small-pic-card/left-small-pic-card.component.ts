import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from 'src/app/shared/models/postCard.model';
import { PostService } from 'src/app/shared/services/postcard.service';

@Component({
  selector: 'app-left-small-pic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-small-pic-card.component.html',
  styleUrls: ['./left-small-pic-card.component.scss']
})
export class LeftSmallPicCardComponent {
  @Input() max :any;
  @Input() displayMode: 'horizontal' | 'vertical' = 'vertical';

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
