import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject = new BehaviorSubject<any>({});
  filter$ = this.filterSubject.asObservable();

  applyFilter(filterValue: any) {
    this.filterSubject.next(filterValue);
  }
}
