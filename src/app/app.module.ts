import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
<<<<<<< Updated upstream
import { MaterialModule } from "./material/material.module";
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatGridListModule,MatGridTile} from '@angular/material/grid-list';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
<<<<<<< Updated upstream
    BrowserModule
=======
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatGridListModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
