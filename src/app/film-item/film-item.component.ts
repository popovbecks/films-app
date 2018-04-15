import { Component, OnInit } from '@angular/core';
import { FilmsService } from "../films.service";
import { FilmClass } from "../class/filmClass";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
filmList: FilmClass[];
commentList = [];
comment: string;
isOpenCom:boolean = false;
  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    let x = this.filmsService.getFilms();
    x.snapshotChanges().subscribe(item => {
      this.filmList = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.filmList.push(y as FilmClass);

      })
    })
  }
  onEdit(emp: FilmClass) {
    this.filmsService.selectFilm = Object.assign({}, emp);
  }
  onDelete(key: string){
    if(confirm('Вы уверены что хотите удалить этого работника?') == true){
      this.filmsService.deleteFilm(key);
    }
  }
  addComment(comment){
  this.commentList.push({
    name:comment
  });
  this.comment = "";
  }
  changeStateCom(){
    if(this.isOpenCom === false){
      this.isOpenCom = true;
    }else{
      this.isOpenCom = false;
    }

  }
}
