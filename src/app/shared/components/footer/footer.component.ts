import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { footerItems, media } from '../../models/footer.model';
import { FooterService } from '../../services/footer.service';
import { FooterJService } from '../../services/footer-j.service';



@Component({
  selector: 'app-footera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerItems: any = []
  medias : media [] = []
  currentYear: number = new Date().getFullYear();

  constructor(private footerService: FooterService,private footerJService:FooterJService) {}

  ngOnInit(): void {
    // this.footerService.getFooterItems().subscribe((data) => {
    //   this.footerItems = data;
    // });
    // this.medias=this.footerService.getmedia()
    this.footerItems=this.footerJService.getAllFooter()
    console.log("footer===>",this.footerItems);
    // sort(
    //   (a: any, b: any) => a.ordre - b.ordre
    // );
  }
}

