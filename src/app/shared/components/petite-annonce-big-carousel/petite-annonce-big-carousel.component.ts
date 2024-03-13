import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { petiteAnnonce } from 'src/app/shared/models/petiteAnnonce.model';
import { Router } from '@angular/router';
import { petiteAnnonceService } from 'src/app/shared/services/petiteAnnonce.service';
import { map } from 'rxjs';
import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { ElapsedTimePipe } from "../../../shared/pipes/elapsedTime.pipe";

@Component({
    selector: 'app-petite-annonce-big-carousel',
    standalone: true,
    templateUrl: './petite-annonce-big-carousel.component.html',
    styleUrls: ['./petite-annonce-big-carousel.component.scss'],
    imports: [CommonModule, CarouselModule, ElapsedTimePipe,TranslateModule]
})
export class PetiteAnnonceBigCarouselComponent {
 
 
  @Input() petitesAnnonces : any[] = []

 
 
  favoriteStatus: { [key: string]: boolean } = {};
  responsiveOptions : any [] =[]
 
  

  constructor (  
     private router: Router){}

  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 4,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    
  }

  goToDetails(id: string) {
    console.log('Navigating to details for ID:', id);
    this.router.navigate(['/det-petiAnn', id]);
  }

  toggleFavorite(id: string) {
    this.favoriteStatus[id] = !this.favoriteStatus[id];
  }

}

