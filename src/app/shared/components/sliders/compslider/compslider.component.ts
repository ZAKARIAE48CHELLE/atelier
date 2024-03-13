import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PostService } from 'src/app/shared/services/postcard.service';
import { LeftSmallPicCardComponent } from '../../cards/left-small-pic-card/left-small-pic-card.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-compslider',
  standalone: true,
  imports: [CommonModule,CarouselModule,ButtonModule,ProgressSpinnerModule,BlockUIModule,LeftSmallPicCardComponent],
  templateUrl: './compslider.component.html',
  styleUrls: ['./compslider.component.scss']
})
export class CompsliderComponent {

    @Input() max :any;
    @Input() displayMode: 'horizontal' | 'vertical' = 'vertical';
    @Input() numvisible : any;
    @Input() numScroll : any;
    posts !: any[]; 
    
    responsiveOptions: any[] | undefined;

    constructor(private postservice: PostService) {}

    ngOnInit() {
      this.posts = this.postservice.getPost()

    
     this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }


}
