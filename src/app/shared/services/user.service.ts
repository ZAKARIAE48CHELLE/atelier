import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private user: user[] = [
      {
        userID: "string",
        nom:'' ,
        prenom:'' ,
        photo: '',
      }
      ];

  getUser(): Observable<user[]> {
    return of(this.user);
  }

}
