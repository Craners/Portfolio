import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects/projects.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
