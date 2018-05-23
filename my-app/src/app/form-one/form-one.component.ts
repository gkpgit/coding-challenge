import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {  
  myform: FormGroup;
  firstName: string;
  lastName: string;

  constructor(private appDataService: AppDataService, private router: Router) { }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        fName: new FormControl('', Validators.required),
        lName: new FormControl('', Validators.required),
      })
    });
  }

  onSubmit() {
    this.appDataService.setName(this.firstName, this.lastName);
    this.router.navigate(['form-two']);
  }
}
