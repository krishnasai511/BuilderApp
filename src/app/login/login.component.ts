import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../project/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    var log=localStorage.getItem("token");
   
    if(log=="false")
    {}
    else{
      this._router.navigate(['/special']);
    }
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log("user_id",res)
        localStorage.setItem('userid', res.user._id)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

}
