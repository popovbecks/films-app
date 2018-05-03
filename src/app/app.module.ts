import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilmServiceService } from "./services/film-service.service";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { FormsModule } from "@angular/forms";
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmListComponent } from './film-list/film-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [FilmServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
