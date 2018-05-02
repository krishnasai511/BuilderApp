import { Component, OnInit } from '@angular/core';
import { SaveTemp } from '../project/service/save.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
email :any;
  constructor(private savetemp: SaveTemp) { }

  ngOnInit() {
  }
  submitted(){
  this.savetemp.forgotPassword(this.email);
  }

}
