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
  list: any[];

  constructor(private _githubService: GithubService) { }

  ngOnInit() {

    this.list = ["https://api.adorable.io/avatars/285/", "https://api.adorable.io/avatars/286/", "https://api.adorable.io/avatars/287/"];
    this.username = 'codacy20';
    this.getProjectsWithLanguages(this.username);
  }

  public getProjectsWithLanguages(username: string) {
    return this._githubService.getProjectsWithLanguages(username).subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }

}
