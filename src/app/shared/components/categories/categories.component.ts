import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FieldsetModule } from 'primeng/fieldset';
import { Menu } from 'src/app/shared/models/menu.model'; 
import { menuService } from 'src/app/shared/services/menu.service';
import { petiteAnnonce } from 'src/app/shared/models/petiteAnnonce.model';
import { petiteAnnonceService } from 'src/app/shared/services/petiteAnnonce.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-categories',
    standalone: true,
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
    imports: [CommonModule, TranslateModule, FieldsetModule, ]
})
export class CategoriesComponent {
  menu: Menu[] = [];
  selectedMenu: Menu | null = null;
  selectedSubCategorie : string | undefined
  petitesAnnonces : petiteAnnonce[] = []

  constructor ( private menuService : menuService , private petiteAnnonceService : petiteAnnonceService, private router :Router ){}


  ngOnInit() {
    this.menu = this.menuService.getAllDomains();
  }

  selectMenu(menu: Menu ) {
    this.selectedMenu = menu;
    
  }
  closeChildrenDiv() {
    this.selectedMenu = null;  
    
  }


  navigateToCategoryList(categoryTitle: string) {
    this.router.navigate(['/category-list', categoryTitle]);
  }

  navigateToChildList(categoryTitle: string, childTitle: string) {
    this.router.navigate(['/category-list', categoryTitle, childTitle]);
  }

  

}

// getChildren(menu: Menu): Menu[] {
//   return menu.children || [];
// }

// getPetitesAnnonceCount(menuTitle: string): number {
  //   // Assuming petitesAnnonces is an array of petiteAnnonce objects
//   return this.petitesAnnonces.filter(petiteAnnonce => petiteAnnonce.classAnnonce === menuTitle).length;
// }

// getChildrenPetitesAnnonceCount(childTitle: string): number {
//   // Assuming petitesAnnonces is an array of petiteAnnonce objects
//   return this.petitesAnnonces.filter(petiteAnnonce => petiteAnnonce.taxoAnnonce === childTitle).length;
// }