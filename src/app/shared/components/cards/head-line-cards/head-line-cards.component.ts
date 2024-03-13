import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from 'src/app/shared/models/postCard.model';
import { PostService } from 'src/app/shared/services/postcard.service';

@Component({
  selector: 'app-head-line-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head-line-cards.component.html',
  styleUrls: ['./head-line-cards.component.scss']
})
export class HeadLineCardsComponent {
  @Input() max:any;
  posts : PostCard[] = []

constructor( private postservice : PostService ){}

ngOnInit() {
this.posts = this.postservice.getPost()
}
}
