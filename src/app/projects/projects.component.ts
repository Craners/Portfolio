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
      this.projects.forEach(element => {
        var x = this.getLanguage(this.username,element.full_name);
        // element.language.push("x");
        console.log(x);
        
      });
      console.log(this.projects);
    });
  }
  public getLanguage(username: string, name:string) {
    this._githubService.getLanguages(username,name).subscribe((data) => {
      return data;
      // console.log(this.projects);
    });
  }
}
