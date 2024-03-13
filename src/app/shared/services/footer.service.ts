// sidebar.service.ts
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { footerItems,media } from '../models/footer.model';


@Injectable({
  providedIn: 'root',
})
export class FooterService { 
    getFooterItems(): Observable<footerItems[]> {
        const footerItems: footerItems [] = [{
            titre: 'About us',
            links: [
              { label: 'Home', link: '/' },
              { label: 'About', link: '/about' },
              { label: 'Contact', link: '/contact' }, 
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' }]
          },
          {
            titre: 'Get the time',
            links: [
              { label: 'Home', link: '/' },
              { label: 'About', link: '/about' },
              { label: 'Contact', link: '/contact' }, 
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' }]
          },
          
          {
            titre: 'Contact us',
            links: [
              { label: 'Home', link: '/' },
              { label: 'About', link: '/about' },
              { label: 'Contact', link: '/contact' }, 
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' },
              { label: 'Contact', link: '/contact' }]
          },
          {
            titre: 'Terms of use',
            links: [
              { label: 'Home', link: '/' },
              { label: 'About', link: '/about'},
              { label: 'Contact', link: '/contact'}, 
              { label: 'Contact', link: '/contact'},
              { label: 'Contact', link: '/contact'},
              { label: 'Contact', link: '/contact'},
              { label: 'Contact', link: '/contact'},
              { label: 'Contact', link: '/contact'}]
          },]
         
        return of(footerItems);
      }
    getmedia() : media[]{
      return [
        {link:'', label:'Youtube',icon:'pi-youtube'},
        {link:'', label:'X',icon:'pi-twitter'},
        {link:'', label:'Facebook',icon:'pi-facebook'},
        {link:'', label:'Instagram',icon:'pi-instagram'},
      ]
    }
    
}
 