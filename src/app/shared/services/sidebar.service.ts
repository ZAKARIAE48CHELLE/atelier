// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { sideitems } from '../models/sidebar.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isSidebarOpenSubject = new BehaviorSubject<boolean>(true);
  isSidebarOpen$ = this.isSidebarOpenSubject.asObservable();

  constructor() {}

  toggleSidebar() {
    this.isSidebarOpenSubject.next(!this.isSidebarOpenSubject.value);
  }

  getSidebarItems(): Observable<sideitems[]> {
    const sidebarItems: sideitems[] = [
      { label: 'Home', link: '#', icon: 'pi pi-home' },
      {
        label: 'Pages',
        link: null,
        icon: null,
        ismega: true,
        listItems: [
          { label: 'Analytics', link: '#', icon: null },
          { label: 'Reports', link: '#', icon: null },
          { label: 'Dashboard', link: '#', icon: null },
        ],
      },
      { label: 'Contact', link: 'faq', icon: null },
      {
        label: 'Services',
        link: null,
        icon: null,
        ismega: true,
        listItems: [
          { label: 'Service 1', link: '#', icon: null },
          { label: 'Service 2', link: '#', icon: null },
          { label: 'Service 3', link: '#', icon: null },
        ],
      },
    ];
    return of(sidebarItems);
  }
}
