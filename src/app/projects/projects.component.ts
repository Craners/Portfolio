import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { Projects } from '../gitProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Projects[];
  username:string;


  constructor(private _githubService:GithubService) { }

  ngOnInit() {

    this.username = "codacy20";

    this._githubService
    .subscribe(() => {
      this.getProjects(this.username);
    });
  }

  getProjects(username: string) {
    this._githubService.projects(username)
      .subscribe(res => {
        this.projects = res;
      });
  }
}
