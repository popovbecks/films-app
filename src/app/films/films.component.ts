import { Component, OnInit } from '@angular/core';
import { FilmsService } from "../films.service";
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private filmService: FilmsService) { }

  ngOnInit() {
  }

}
