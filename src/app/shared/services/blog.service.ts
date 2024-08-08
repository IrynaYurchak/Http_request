import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpostResponse, IpostRequest } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = environment.BACKEND_URL;
  private api = { post: `${this.url}/post` };

  constructor(private http: HttpClient) { }

  getAll(): Observable<IpostResponse[]> {
    return this.http.get<IpostResponse[]>(this.api.post);
  }
  create(post: IpostRequest): Observable<IpostResponse> {
    return this.http.post<IpostResponse>(this.api.post, post);
  }
  updata(post: IpostRequest, id: number): Observable<IpostResponse> {
    return this.http.patch<IpostResponse>(`${this.api.post}/${id}`, post);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.post}/${id}`)
  }
}