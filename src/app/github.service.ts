import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/publishLast';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import { environment } from '../environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProject(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos?sort=updated&type=all&access_token=${environment.apikey}`,
      { responseType: 'json' });
  }

  getLanguages(repo: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${repo}/languages?access_token=${environment.apikey}`,
      { responseType: 'json' });
  }

  getContributors(repo: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${repo}/contributors?access_token=${environment.apikey}`,
      { responseType: 'json' });
  }

  getProjectsWithLanguages(username: string): Observable<any[]> {
    return this.getProject(username)
      .map((res: any) => {
        // console.log(res, "response");
        return res;
      })
      .flatMap((projects: any[]) => {
        if (projects.length > 0) {
          return Observable.forkJoin(
            projects.map((project: any) => {
              let myMoment: moment.Moment = moment(project.updated_at);
              project.updated_at = myMoment.format("MMMM Do YYYY, H:MM");
              return this.getLanguages(project.full_name)
                .map((res: any) => {
                  let languages: any = res;
                  project.languages = Object.keys(languages);
                  return project;
                });
            })
          );
        }
        return Observable.of([]);
      })
      .flatMap((projects: any[]) => {
        if (projects.length > 0) {
          return Observable.forkJoin(
            projects.map((project: any) => {
              return this.getContributors(project.full_name)
                .map((res: any) => {
                  let contributors: any = res;
                  project.contributors = [];
                  if (contributors.length > 1) {
                    // these statements execute
                    contributors.forEach(function (element, index) {
                      // console.log(element.login);
                      project.contributors.push(element.login);
                      // project.contributors[index] = (element.login);
                    });
                  }
                  // project.contributors = contributors[0].login;
                  return project;
                });
            })
          );
        }
        return Observable.of([]);
      })
  }
}
