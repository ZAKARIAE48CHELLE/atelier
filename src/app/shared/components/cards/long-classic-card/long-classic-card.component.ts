import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../../models/postCard.model';
import { PostService } from '../../../services/postcard.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-long-classic-card',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './long-classic-card.component.html',
  styleUrls: ['./long-classic-card.component.scss']
})
export class LongClassicCardComponent {
  @Input() max : any;
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
