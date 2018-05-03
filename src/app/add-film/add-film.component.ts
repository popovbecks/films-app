import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from "../services/film-service.service";
import {Item } from "../classes/Item";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  constructor(private itemService: FilmServiceService) { }
  item: Item = {
    title: '',
    year: '',
    country: '',
    genre: '',
    actors: '',
    description: ''
  }

  blogState: boolean = false;
  ngOnInit() {
  }
  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addBlogItem(this.item);
      this.onCancel();
    }
  }
  showAdd(){
    this.blogState = !this.blogState;
  }
  onCancel() {
    this.item.title = '';
    this.item.year = '';
    this.item.country = '';
    this.item.genre = '';
    this.item.actors = '';
    this.item.description = '';
    this.blogState = false;
  }


}
