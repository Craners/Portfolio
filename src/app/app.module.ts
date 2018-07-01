import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ProjectsComponent } from './projects/projects.component';
import { Project2Component } from './project2/project2.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule,
   MatTableModule, 
   MatExpansionModule, 
   MatDatepickerModule,
   MatNativeDateModule } from '@angular/material';
/**
 * Services
 */
import { GithubService } from './github.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SocialLinksComponent,
    ProjectsComponent,
    Project2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
