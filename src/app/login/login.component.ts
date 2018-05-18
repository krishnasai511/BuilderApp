import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../project/service/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('loginform') LoginForm : NgForm

  loginUserData = {}

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
    const log = localStorage.getItem('token');

    if (log === 'false') { } else {
      this._router.navigate(['/special']);
    }
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
       // console.log("user_id",res)
      //  console.log("username",res.user.username)
      this._auth.user.name=res.user.username;
        localStorage.setItem('username',res.user.username)
        localStorage.setItem('userid', res.user._id)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err =>{ window.alert('Please Check you Email & Password ')
      this.LoginForm.reset();
    }
    ) 
  }
 
}
