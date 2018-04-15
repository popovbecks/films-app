import { Component, OnInit } from '@angular/core';
import { FilmsService } from "../films.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.css']
})
export class FilmsFormComponent implements OnInit {

  constructor(private filmsService: FilmsService ) { }
getService(){
    return this.filmsService;
}
  onSubmit(filmForm: NgForm){
    if(filmForm.value.$key == null){
      this.filmsService.insertFilm(filmForm.value);
      this.resetForm();

    }else {
      this.filmsService.updateEmployee(filmForm.value);
      this.resetForm(filmForm);
    }
  }
  onCancel(filmForm?: NgForm) {
    if(filmForm != null)
      filmForm.reset();
    this.filmsService.selectFilm = {
      $key: null,
      title: '',
      year: null,
      country: '',
      genre: '',
      actors: '',
      description: ''
    }
  }
  resetForm(employeeForm?: NgForm) {
    if(employeeForm != null)
      employeeForm.reset();
    this.filmsService.selectFilm = {
      $key: null,
      title: '',
      year: null,
      country: '',
      genre: '',
      actors: '',
      description: ''
    }
  }

  ngOnInit() {
    this.resetForm();
  }

}
