import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Projects } from '../gitProject';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  projects: Projects[];
  displayedColumns = ["Repo", "Updated", "Languages"];
  username: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {

    this.username = 'radualex';
    this.getProjects(this.username);
  }

  public getProjects(username: string) {
    this._githubService.getProject(username).subscribe((data) => {
      this.projects = data;
      // here's where you map your data or whatever
      //console.log('DATA', this.projects[0].updated_at);
    });

  }
}
