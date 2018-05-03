import { Component, OnInit } from '@angular/core';
import { FilmServiceService } from "../services/film-service.service";
import {Item } from "../classes/Item";
import { Comment } from "../classes/comment";
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  editCommentState: boolean = false;
  commentToEdit: Comment;
  commentsState: boolean = false;
  itemToEdit: Item;
  itemToShow: Item;
  comment: Comment = {
    message: ''
  }
  constructor(private itemService: FilmServiceService) { }

  ngOnInit() {
    this.itemService.getBlogs().subscribe(items => {
      items.forEach(item => {
        item.comments.subscribe(comment => {
          item.comments = comment;
          return items
        })
      })
      this.items = items;
      console.log(this.items)
    })
  }
  deleteItem(event , item: Item){
    this.itemService.deleteBlog(item)
  }
  editItem(event, item: Item){
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: Item) {
    this.itemService.editItem(item);
    this.clearState();
  }
  cancelUpdate() {

  }
  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }
  clearCommentState() {
    this.editCommentState = false;
    this.commentToEdit = null;
  }
  //Comments
  onSubmitCom(item: Item) {
      this.itemService.addComment(this.comment, item);
      this.comment.message = '';
      this.itemToEdit = null;


  }
  changeCommentState(item: Item) {
    this.itemToShow = item;
    this.commentsState = !this.commentsState;
  }


}
