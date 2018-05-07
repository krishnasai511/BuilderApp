import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../project/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {};
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
    const log = localStorage.getItem('token');
    // tslint:disable-next-line:triple-equals
    if (log == 'true') {
      this._router.navigate(['/special']);
    } else {
    }
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
<<<<<<< HEAD
    .subscribe(
      res => {
        localStorage.setItem('username',res.user.username)
        localStorage.setItem('userid',res.user._id)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )      
=======
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userid', res.user._id);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );

>>>>>>> 17c4464f5096d42dc42c97b85945977f60740b93
  }


}
