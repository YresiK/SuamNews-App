import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

   private apiUrl =
'https://newsapi.org/v2/everything?q=tesla&language=en&sortBy=publishedAt&apiKey=e1fc053bdaaa4d69960c2f1d8dc8bf43';
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}