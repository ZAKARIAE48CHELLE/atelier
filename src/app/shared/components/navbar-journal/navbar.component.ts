import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemsService} from '../../services/navitems.service'; 
import { RouterLink ,Router} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footerolod/footer.component';
import { SidebarService } from '../../services/sidebar.service';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { nav } from '../../models/nav.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    TranslateModule,
    FooterComponent,
    SideBarComponent,
  ],
})
export class NavbarComponent implements OnInit {
  'compilerOptions': {
    baseUrl: './';
    paths: {
      '@angular/*': ['./node_modules/@angular/*'];
    };
  };

  navData$: Observable<nav>;
  constructor(
    private router: Router,
    private NavItemsService: NavItemsService,
    private SidebarService: SidebarService
  ) {
    this.navData$ = this.NavItemsService.getNavData();
  }

isHeaderScrolled = false;



@HostListener('window:scroll')
onScroll(){
    this.isHeaderScrolled = window.scrollY >0;
}
ngOnInit(): void {
    // this.megaItems = this.NavItemsService.getMegaItmes();
    
    
}
toggleSidebar() {
  this.SidebarService.toggleSidebar()
}

}