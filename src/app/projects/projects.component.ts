import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Project } from '../gitProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  username: string;
  check: boolean;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {

    this.check = false;
    this.username = 'codacy20';
    this.getProjectsWithLanguages(this.username);
  }

  public getProjectsWithLanguages(username: string) {
    return this._githubService.getProjectsWithLanguages(username).subscribe((data) => {
      // console.log(data);
      this.projects = data;
      this.check = true;
    });
  }

}
