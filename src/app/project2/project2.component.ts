import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Project } from '../gitProject';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {

  projects: Project[];
  displayedColumns = ["Repo", "Updated", "Languages", "Link"];
  username: string;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {

    this.username = 'radualex';
    this.getProjectsWithLanguages(this.username);
  }

  public getProjectsWithLanguages(username: string) {
    return this._githubService.getProjectsWithLanguages(username).subscribe((data) => {      
      this.projects = data;
    });
  }
}
