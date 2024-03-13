import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { Menu } from '../../models/megaMenu/megaMenu.model';
import { MegaMenuService } from '../../services/megaMenu.Service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,MegaMenuModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuData: Menu[] = [];
  selectedMenu: Menu | null = null;

  constructor(private MegaMenuService: MegaMenuService,private router: Router) {}

  ngOnInit(): void {
    this.loadMenuData();
  }

  loadMenuData(): void {
    this.MegaMenuService.getMenuData().subscribe((data) => {
      this.menuData = data;
    });
  }

  toggleMegaMenu(menu: Menu): void {
    // Toggle the selected menu
    this.selectedMenu = this.selectedMenu === menu ? null : menu;
  }
  

  openMegaMenu(menu: Menu): void {
    this.selectedMenu = menu;
  }

  closeMegaMenu(): void {
    this.selectedMenu = null;
  }
}
