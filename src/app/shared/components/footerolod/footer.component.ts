import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { footerItems, media } from '../../models/footer.model';
import { FooterService } from '../../services/footer.service';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerItems: footerItems [] = []
  medias : media [] = []
  currentYear: number = new Date().getFullYear();

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
    this.footerService.getFooterItems().subscribe((data) => {
      this.footerItems = data;
    });
    this.medias=this.footerService.getmedia()
  }
}

