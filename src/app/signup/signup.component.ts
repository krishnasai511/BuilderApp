import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { AuthService } from '../project/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    var log=localStorage.getItem("token");
    if(log=="true")
    {
      this._router.navigate(['/special'])
    }
    else{
    }
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this._auth.user.name=res.user.username
        localStorage.setItem('token', res.token)
        localStorage.setItem('userid',res.user._id)
        localStorage.setItem('username',res.user.username)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )      
  }


}
