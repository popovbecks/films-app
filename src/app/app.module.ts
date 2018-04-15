import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { FilmsFormComponent } from './films-form/films-form.component';
import {FilmsService} from "./films.service";
import { FilmItemComponent } from './film-item/film-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmsFormComponent,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
