import { Component, OnInit } from '@angular/core';
import { AuthService } from './project/service/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  constructor(private _authService: AuthService){}

 // user=username();
}