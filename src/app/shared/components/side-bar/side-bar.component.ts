import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { TranslateModule } from '@ngx-translate/core';
import { sideitems } from '../../models/sidebar.model';




@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  sidebarItems: sideitems[] = [];
  isSidebarOpen = true;

  constructor(private sidebarService: SidebarService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.loadSidebarItems();
    this.sidebarService.isSidebarOpen$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  private loadSidebarItems() {
    this.sidebarService.getSidebarItems().subscribe((items) => {
      this.sidebarItems = items;
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
}
