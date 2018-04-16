import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    phone:new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.pattern('[^0-5][0-9]{9}')]),
    password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
    confirm:new FormControl(null,[Validators.required,Validators.minLength(6)])
  });
  onSubmit(){
    
    // if(this.userForm.value.password!=this.userForm.value.confirm){
    //   console.log('not matched');
    // }
    console.log(this.userForm.value);
    this.userForm.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
