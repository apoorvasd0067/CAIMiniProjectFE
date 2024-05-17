import { Injectable } from '@angular/core';
import { APIResponse, IUser, Ipass } from '../components/shared/models/User';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:7290/api/User/";
  constructor(private http : HttpClient) { }

  signup(userObj: IUser): Observable<APIResponse<IUser>> {
    return this.http.post<APIResponse<IUser>>(`${this.baseUrl}Register`, userObj);
  }

  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);

  }
   updatePassword(email:string, userObj:Ipass){
   return this.http.put<APIResponse<Ipass>>(`${this.baseUrl}${email}`,userObj);

  }
}

