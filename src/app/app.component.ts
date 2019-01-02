import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
    readonly ROOT_URL = 'https://api.openweathermap.org/data/2.5//weather?appid=2f72e733c62c8cc2533fe9d8f85cb335&q=oslo';
    constructor(private http: HttpClient) {};
    posts: Observable<any>;

getPosts(){
  this.posts = this.http.get(this.ROOT_URL + '/posts');
}
}

