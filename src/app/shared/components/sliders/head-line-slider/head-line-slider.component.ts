import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from 'src/app/shared/services/postcard.service';
import { BlockUIModule } from 'primeng/blockui';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-head-line-slider',
  standalone: true,
  imports: [CommonModule,GalleriaModule,ProgressSpinnerModule,BlockUIModule],
  templateUrl: './head-line-slider.component.html',
  styleUrls: ['./head-line-slider.component.scss']
})
export class HeadLineSliderComponent {
posts: any[] | undefined;
    
    responsiveOptions: any[] | undefined;

    constructor(private postservice: PostService) {}

    ngOnInit() {
      this.posts = this.postservice.getPost()

    
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
}
