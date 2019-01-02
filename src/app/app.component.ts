import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
  apiUrl = "textHere"
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { };
  posts: Observable<any>;

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts')

  }
}

