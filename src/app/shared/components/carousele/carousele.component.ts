import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousele',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './carousele.component.html',
  styleUrls: ['./carousele.component.scss']
})
export class CarouseleComponent {
  @Input() component !:string
  @Input()  images : any[] = []
  @Input() type !: string
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 3
    }
  },
  nav: true,
  navText: [' <div> <i class="fa fa-chevron-left"></i> </div>    ', ' <div> <i class="fa fa-chevron-right"></i> </div>    '],
  };

}
