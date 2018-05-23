import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent implements OnInit {  
  myform: FormGroup; 
  genders: string[] = [
    'Male',
    'Female',
    'Unspecified'
  ];
  age: number;
  gender: string;

  constructor(private appDataService: AppDataService, private router: Router) { 
    this.gender = '';
  }

  ngOnInit() {
    this.myform = new FormGroup({
      age: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl()
    });
  }

  onSubmit() {
    this.appDataService.setAgeAndGender(this.age, this.gender);
    this.router.navigate(['summary-view']);
  }
}
