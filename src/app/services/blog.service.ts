import { Injectable } from '@angular/core';
import { APIResponse, IBlog } from '../components/shared/models/Blog';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl:string="https://localhost:7290/api/Blog";
  constructor(private http : HttpClient) { }

getAllBlog(): Observable<APIResponse<IBlog[]>>{
  return this.http.get<APIResponse<IBlog[]>>(`${this.baseUrl}`);
}
createBlog(blogObj: IBlog): Observable<APIResponse<IBlog>> {
  return this.http.post<APIResponse<IBlog>>(`${this.baseUrl}/Blogwrite`, blogObj);
}
updateBlog(id: any, blog:IBlog){
  return this.http.put<APIResponse<IBlog>>(
    `${this.baseUrl}/${id}`,
    blog
  );
}

deleteBlog(id:any):Observable<APIResponse<IBlog>> {
  return this.http.delete<APIResponse<IBlog>>(`${this.baseUrl}/${id}`);
}

}