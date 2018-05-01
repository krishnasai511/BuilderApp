import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    var log=localStorage.getItem("token");
    console.log("token",log);
  
     if(!log)
    {
      this._router.navigate(['/welcome'])
    }
    else{
      this._router.navigate(['/special']);
    }

  }


}
