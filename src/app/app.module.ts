import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ProjectsComponent } from './projects/projects.component';

/**
 * Services
 */
import { GithubService } from './github.service';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    SocialLinksComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
