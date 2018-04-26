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
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )      
  }


}
