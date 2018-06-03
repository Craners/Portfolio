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
    this.getProjects(this.username);
  }

  public getProjects(username: string) {
    this._githubService.getProject(username).subscribe((data) => {
      this.projects = data;
      // here's where you map your data or whatever
      console.log('DATA', this.projects);
    });
  }

}
