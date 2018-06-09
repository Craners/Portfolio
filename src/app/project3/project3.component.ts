import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Project } from '../gitProject';
import { Observable } from 'rx';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  projects: Project[];
  username: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.username = 'Samin-Asnaashari';
    this.getProjectsWithLanguages(this.username);
  }

  // public getProjects(username: string) {
  //     this._githubService.getProject(username).subscribe((data) => {
  //       console.log('DATA', data);
  //       return data;
  //   });
  // }

  public getProjectsWithLanguages(username: string) {
    return this._githubService.getProjectsWithLanguages(username).subscribe((data) => {
      this.projects = data;
    });
  }

}