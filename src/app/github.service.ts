import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProject(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?sort=updated&type=all&access_token=029356b50e87038d52ca1a1e4a852f252571c10d`,
      { responseType: 'json' });
  }
}
