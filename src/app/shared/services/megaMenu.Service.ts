import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Menu } from '../models/megaMenu/megaMenu.model';


@Injectable({
  providedIn: 'root',
})
export class MegaMenuService{
  getMenuData(): Observable<Menu[]> {
    // Example data - Replace this with your actual data retrieval logic
    const menuData: Menu[] = [
      {
        label: 'Home',
        link: '/',
        megaMenu: [
          { label: 'Submenu 1 et un de des foix omg new jeans', link: '/submenu1', megaMenu: [
            {
              label: 'Submenu 1.1', link: '/submenu1.1', megaMenu: []
            }
          ] },
          { label: 'Submenu 2', link: '/submenu2', megaMenu: [] },
        ],
      },
      {
        label: 'Products',
        link: '/products',
        megaMenu: [
          { label: 'Category 1', link: '/category1', megaMenu: [] },
          { label: 'Category 2', link: '/category2', megaMenu: [] },
        ],
      },
      {
        label: 'Products',
        link: '/products',
        megaMenu: [
          { label: 'Category 1', link: '/category1', megaMenu: [] },
        ],
      },
      {
        label: 'Products',
        link: '/products',
        megaMenu: [
          { label: 'Category 1', link: '/category1', megaMenu: [] },
          { label: 'Category 2', link: '/category2', megaMenu: [] },
          { label: 'Category 3', link: '/category1', megaMenu: [] },
          { label: 'Category 4', link: '/category1', megaMenu: [] },
          { label: 'Category 4', link: '/category1', megaMenu: [] },
          { label: 'Category 4', link: '/category1', megaMenu: [] },
          
        ],
      },{
        label: 'Products',
        link: '/products',
        megaMenu: [
          { label: '', link: '', megaMenu: [
            { label: 'Category 2', link: '/category2', megaMenu: [] },
            { label: 'Category 3', link: '/category1', megaMenu: [] },
            { label: 'Category 4', link: '/category1', megaMenu: [] },
            { label: 'Category 4', link: '/category1', megaMenu: [] },
            { label: 'Category 4', link: '/category1', megaMenu: [] },
          ] },
        ],
      },
      
      // Add more menu items as needed
    ];

    return of(menuData);
  }
}
