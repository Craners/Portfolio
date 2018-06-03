import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProject(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?access_token=35c49d659a438696d010add63bf88b2c9e6254a9`,
      { responseType: 'json' });
  }

  getLanguages(username: string, name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${name}/languages?access_token=35c49d659a438696d010add63bf88b2c9e6254a9`,
      { responseType: 'json' });
  }

  getProject2(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?access_token=35c49d659a438696d010add63bf88b2c9e6254a9`,{ responseType: 'json' })
      .flatMap((projects) => {
        return this.http.get('https://api.github.com/repos/' + projects[0].full_name + '/languages?access_token=35c49d659a438696d010add63bf88b2c9e6254a9',{ responseType: 'json' })
      });
  }

}
