import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/routes/signup";
  private _loginUrl = "http://localhost:3000/routes/login";
  public user ={
    name: '',
  }
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)

  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this._router.navigate(['/welcome']);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
