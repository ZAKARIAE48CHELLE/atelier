import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LeftSmallPicCardComponent } from '../../cards/left-small-pic-card/left-small-pic-card.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TemoignageService } from 'src/app/shared/services/temoignage.service';
@Component({
  selector: 'app-soutien-slider',
  standalone: true,
  imports: [
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule,
    LeftSmallPicCardComponent,
    CarouselModule,
    ButtonModule,
  ],
  templateUrl: './soutien-slider.component.html',
  styleUrls: ['./soutien-slider.component.scss'],
})
export class SoutienSliderComponent {
  temoignages!: any;
  responsiveOptions : any;
  @Input() max : any;
  @Input() numvisible :any;
  @Input() numScroll :any;

  ngOnInit() {
    this.temoignages = this.TemoignageService.getTemoignage();
  }
  constructor(private TemoignageService: TemoignageService) {}
}
