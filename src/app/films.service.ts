import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FilmClass } from "./class/filmClass";

@Injectable()
export class FilmsService {
  filmList: AngularFireList<any>;
selectFilm = new FilmClass();
 stateOfForm: boolean = true;
  constructor(private firebase: AngularFireDatabase) {

  }
    getFilms() {
      this.filmList = this.firebase.list('films');
      return this.filmList;

   }
  insertFilm(film: FilmClass){
    this.filmList.push({
      title: film.title,
      year: film.year,
      country: film.country,
      genre: film.genre,
      actors: film.actors,
      description: film.description
    });
  }
  deleteFilm($key: string) {
    this.filmList.remove($key);
  }
  updateEmployee(film: FilmClass) {
    this.filmList.update(film.$key,
      {
        title: film.title,
        year: film.year,
        country: film.country,
        genre: film.genre,
        actors: film.actors,
        description: film.description
      });
  }

}
