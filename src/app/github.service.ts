import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/publishLast'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  projects(username: string) {
    return this.http.get(`https://myproxi.herokuapp.com/`+`https://api.github.com/users/${username}/repos`)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }
}
