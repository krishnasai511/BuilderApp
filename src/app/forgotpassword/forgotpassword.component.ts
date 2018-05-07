import { Component, OnInit } from '@angular/core';
import { SaveTemp } from '../project/service/save.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: any;
  resetbtn: boolean ;
  changebtn: boolean;
  constructor(private savetemp: SaveTemp) {
  this.resetbtn = true;
  this.changebtn = false;
   }

  ngOnInit() {
  }
  submitted() {
  this.savetemp.forgotPassword(this.email);
  this.changebtn = true;
  this.resetbtn = false;
 }

 Passwordsubmit() {
   window.alert('Password successfully changed');
 }

}
