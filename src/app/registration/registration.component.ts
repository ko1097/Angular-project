import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit  { 

  'user':User
  constructor(){}
  ngOnInit(): void {
  
    this.resetForm();
      
  }
  resetForm(form?:NgForm)
  {
    if(form != null)
    form.reset();
    this.user = {
      'FirstName':'',
      'LastName':'',
      'Email':'',
      'Password':''
      
    }

  }
 
 }


