import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl :string =  "http://localhost:3000"
  users: any[];
  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }
//   get_user(){
//     this.http.get(this.baseUrl + '/users').subscribe((res : any[])=>{
//     console.log(res);
//     this.users = res;
//     });
// }
} 
