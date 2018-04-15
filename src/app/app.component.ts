import { Component } from '@angular/core';
import { FilmsService } from "./films.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filmsService: FilmsService ) { }
 isActiveChange: boolean = this.filmsService.stateOfForm;

}
