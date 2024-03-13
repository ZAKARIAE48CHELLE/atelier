// shared/state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { liensUtiles } from 'src/app/shared/models/liens-utiles.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private selectedLienSubject: BehaviorSubject<liensUtiles | null> = new BehaviorSubject<liensUtiles | null>(null);

  get selectedLien$(): Observable<liensUtiles | null> {
    return this.selectedLienSubject.asObservable();
  }

  setSelectedLien(lien: liensUtiles | null): void {
    this.selectedLienSubject.next(lien);
  }
}
