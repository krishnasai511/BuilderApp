import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  onSubmit(){
    console.log(this.userLoginForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
