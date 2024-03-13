import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from 'src/app/shared/services/postcard.service';
import { PostCard } from 'src/app/shared/models/postCard.model';

@Component({
  selector: 'app-right-small-pic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-small-pic-card.component.html',
  styleUrls: ['./right-small-pic-card.component.scss']
})
export class RightSmallPicCardComponent {
  posts : PostCard[] = []
  @Input() max :any;
constructor( private postservice : PostService ){}

ngOnInit() {
this.posts = this.postservice.getPost()
}
  formatPostDate(post: PostCard): string {
    // Format date as a string without time
    return post.date.toLocaleDateString();
  }

}
