import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Projects } from '../gitProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];
  username: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {

    this.username = 'codacy20';
    // this.getProjects(this.username);
    this.getProjects2(this.username);
  }

  public getProjects(username: string) {
    this._githubService.getProject(username).subscribe((data) => {
      this.projects = data;
      // this.projects.forEach(element => {
      //   this.getLanguage(this.username, element.full_name);
      // });
      console.log(this.projects);
    });
  }
  public getLanguage(username: string, name: string) {
    this._githubService.getLanguages(username, name).subscribe((data) => {
      // console.log(data);
      return data;
    });
  }

  getProjects2(username: string) {
    this._githubService.getProject2(username).subscribe((data) => {
      console.log(data);
      
      return data;
    });
  }
}
